import React, { useEffect, useState } from 'react';

import { PackageData } from '../../data/packages';

import PackageCard from './package-card';
import './packages.css';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // List of npm packages to fetch
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

          // Get the latest version info
          const latestVersion = data['dist-tags'].latest;
          const latestData = data.versions[latestVersion];

          // Try to fetch download stats from npm stats API
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
            keywords: latestData.keywords || [],
            license: latestData.license || 'Unknown',
            lastModified:
              data.time?.modified || data.time?.created || 'Unknown',
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
        <label className="section-title">NPM Packages</label>
        <div className="loading">Loading packages...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="packages">
        <label className="section-title">NPM Packages</label>
        <div className="error">Error loading packages: {error}</div>
      </div>
    );
  }

  return (
    <div className="packages">
      <label className="section-title">NPM Packages</label>
      <div className="packages-container">
        {packages.map((pkg, index) => {
          return <PackageCard package={pkg} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Packages;
