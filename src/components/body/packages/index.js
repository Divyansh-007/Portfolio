import React, { useEffect, useState } from 'react';
import { PackageData } from '../../data/packages';
import PackageCard from './package-card';
import './packages.css';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const packageNames = PackageData;

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const packagePromises = packageNames.map(async packageName => {
          const response = await fetch(
            `https://registry.npmjs.org/${packageName}`
          );
          if (!response.ok) {
            throw new Error(`Failed to fetch ${packageName}`);
          }
          const data = await response.json();

          const latestVersion = data['dist-tags'].latest;
          const latestData = data.versions[latestVersion];

          let downloads = 0;
          try {
            const statsResponse = await fetch(
              `https://api.npmjs.org/downloads/point/last-month/${packageName}`
            );
            if (statsResponse.ok) {
              const statsData = await statsResponse.json();
              downloads = statsData.downloads || 0;
            }
          } catch (statsError) {
            // Silently handle stats fetch errors
          }

          return {
            name: packageName,
            version: latestVersion,
            description: latestData.description || 'No description available',
            downloads: downloads,
            repository: latestData.repository?.url || null,
            homepage: latestData.homepage || null,
            license: latestData.license || 'Unknown',
          };
        });

        const packagesData = await Promise.all(packagePromises);
        setPackages(packagesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [packageNames]);

  if (loading) {
    return (
      <div className="packages">
        <div className="packages-loading">
          <span className="loading-spinner">{'⠋'}</span> Fetching from
          registry.npmjs.org...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="packages">
        <div className="packages-error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="packages">
      <div className="packages-tree-root">portfolio@0.1.0</div>
      {packages.map((pkg, index) => (
        <PackageCard
          key={index}
          package={pkg}
          isLast={index === packages.length - 1}
        />
      ))}
    </div>
  );
};

export default Packages;
