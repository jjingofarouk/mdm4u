import React, { useState } from 'react';
import RoadSafetyCharts from './RoadSafetyCharts';
import './App.css';
import { 
  BarChart2, 
  FileText, 
  Microscope, 
  TrendingUp, 
  PieChart, 
  Target,
  Map
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: <BarChart2 size={20} /> },
    { id: 'introduction', label: 'Introduction', icon: <FileText size={20} /> },
    { id: 'methodology', label: 'Methodology', icon: <Microscope size={20} /> },
    { id: 'analysis', label: 'Statistical Analysis', icon: <TrendingUp size={20} /> },
    { id: 'charts', label: 'Interactive Charts', icon: <PieChart size={20} /> },
    { id: 'conclusions', label: 'Conclusions', icon: <Target size={20} /> }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'overview':
        return (
          <div className="content-section">
            <h2>Road Safety Trends on Ontario Highways (2000–2019)</h2>
            <div className="author-info">
              <p><strong>Author:</strong> Boris Rodolphe Foumdji Nde</p>
              <p><strong>Course:</strong> MDM4U Culminating Project</p>
              <p><strong>Date:</strong> June 18, 2025</p>
            </div>
            
            <div className="executive-summary">
              <h3>Executive Summary</h3>
              <p>
                This comprehensive analysis examines collision trends across Ontario's highway system from 2000 to 2019, 
                focusing on Freeways, King's Highways, and Secondary Highways. The study investigates whether collision 
                rates have significantly decreased over this 20-year period and explores the relationships between different 
                road types.
              </p>
              
              <div className="key-findings">
                <h4>Key Findings</h4>
                <ul>
                  <li><strong>Freeway Safety:</strong> Collision rates remained stable (0.5-0.6 per MVKM) with no significant decline</li>
                  <li><strong>Road Type Differences:</strong> Secondary Highways showed highest collision rates (1.095 mean), 
                      followed by King's Highways (0.68 mean) and Freeways (0.57 mean)</li>
                  <li><strong>Statistical Significance:</strong> ANOVA results confirmed significant differences between road types 
                      (F(2,57) = 209, p < 0.00001)</li>
                  <li><strong>Correlation Analysis:</strong> Weak correlations found between collision counts and rates, 
                      supporting the importance of MVKM normalization</li>
                </ul>
              </div>

              <div className="research-question">
                <h4>Research Question</h4>
                <p>
                  <em>Have collision rates on Ontario Freeways significantly decreased from 2000 to 2019, and how do 
                  these trends compare to those on King's Highways and Secondary Highways?</em>
                </p>
              </div>
            </div>
          </div>
        );

      case 'introduction':
        return (
          <div className="content-section">
            <h2>Introduction</h2>
            <p>
              Road safety is a critical public policy issue in Ontario, where highways serve as vital arteries for 
              economic and social connectivity. The Ontario Road Safety Annual Report provides a comprehensive dataset 
              on collision counts and rates (collisions per million vehicle kilometres of travel, MVKM) across Freeways, 
              King's Highways, Secondary Highways, Provincial Highways, Municipal Roads, and Ontario-wide statistics 
              from 2000 to 2019.
            </p>
            
            <p>
              This report focuses on analyzing collision trends to assess whether improvements in infrastructure, 
              vehicle safety, and regulations have reduced collision rates, particularly on Freeways that are designed 
              for high-speed, high-volume traffic. The significance of this study lies in its potential to inform 
              targeted safety interventions and improve public safety policies.
            </p>

            <div className="hypothesis-section">
              <h3>Hypothesis</h3>
              <p>
                I hypothesize that collision rates on Ontario Freeways have significantly decreased from 2000 to 2019 
                due to improved infrastructure and safety measures. I also predict a weak correlation (Pearson's r < 0.3) 
                between collision counts and rates across Freeways, King's Highways, and Secondary Highways, as rates 
                are normalized by MVKM that may mask direct relationships with raw collision counts.
              </p>
            </div>

            <div className="historical-context">
              <h3>Historical Context</h3>
              <p>
                Historically, advancements such as improved road design, stricter enforcement, and vehicle safety 
                technologies (e.g., airbags, anti-lock brakes) have been associated with declining collision rates. 
                However, variations across road types suggest differing safety challenges. The findings aim to provide 
                actionable recommendations for policymakers and align with the overall objective of applying data 
                management to solve significant problems.
              </p>
            </div>
          </div>
        );

      case 'methodology':
        return (
          <div className="content-section">
            <h2>Data Collection Method & Analysis Plan</h2>
            
            <div className="data-source">
              <h3>Source and Scope</h3>
              <p>
                The dataset was sourced from the Ontario Road Safety Annual Report (2000–2019). It includes collision 
                counts (discrete, quantitative) and collision rates (continuous, quantitative, collisions per MVKM) for 
                Freeways, King's Highways, Secondary Highways, Provincial Highways, Municipal Roads, and Ontario-wide totals.
              </p>
              <p>
                The dataset comprises 20 annual observations per road type, totalling 120 data points (20 years × 6 categories × 2 variables). 
                This is a secondary dataset representing a complete census of reported collisions, which eliminates the need for sampling.
              </p>
            </div>

            <div className="variables">
              <h3>Variables</h3>
              <ul>
                <li><strong>Collision Counts:</strong> Number of reported collisions per year for each road type</li>
                <li><strong>Collision Rates:</strong> Collisions per MVKM, normalizing for traffic volume</li>
                <li><strong>Road Types:</strong> Freeways (high-capacity, controlled-access), King's Highways (major arterial roads), 
                    Secondary Highways (regional connectors)</li>
                <li><strong>Time:</strong> Years 2000–2019 treated as an independent variable for trend analysis</li>
              </ul>
            </div>

            <div className="analysis-methods">
              <h3>Statistical Methods</h3>
              <div className="method-grid">
                <div className="method-card">
                  <h4>Descriptive Statistics</h4>
                  <p>Mean, median, standard deviation, range, and IQR calculations for collision counts and rates</p>
                </div>
                <div className="method-card">
                  <h4>Trend Analysis</h4>
                  <p>Linear and quadratic regression models to identify temporal trends in collision rates</p>
                </div>
                <div className="method-card">
                  <h4>Correlation Analysis</h4>
                  <p>Pearson's correlation coefficients to assess relationships between variables</p>
                </div>
                <div className="method-card">
                  <h4>Comparative Analysis</h4>
                  <p>One-way ANOVA to test for significant differences between road types</p>
                </div>
              </div>
            </div>

            <div className="limitations">
              <h3>Data Limitations</h3>
              <ul>
                <li><strong>Reporting Changes:</strong> Pre-2011 data for King's Highways included Tertiary Roads</li>
                <li><strong>MVKM Estimation:</strong> Collision rates depend on accurate MVKM data</li>
                <li><strong>External Factors:</strong> Weather, driver behavior, and policy changes not included</li>
              </ul>
            </div>
          </div>
        );

      case 'analysis':
        return (
          <div className="content-section">
            <h2>Statistical Analysis Results</h2>
            
            <div className="descriptive-stats">
              <h3>Descriptive Statistics Summary</h3>
              <div className="stats-grid">
                <div className="stat-card">
                  <h4>Freeways</h4>
                  <div className="stat-details">
                    <p><strong>Collision Counts:</strong></p>
                    <ul>
                      <li>Mean: 21,797</li>
                      <li>Median: 21,780.5</li>
                      <li>Std Dev: 2,213.7</li>
                      <li>Range: 7,818 (18,870-26,688)</li>
                    </ul>
                    <p><strong>Collision Rates:</strong></p>
                    <ul>
                      <li>Mean: 0.57</li>
                      <li>Median: 0.6</li>
                      <li>Std Dev: 0.05</li>
                      <li>Range: 0.1 (0.5-0.6)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="stat-card">
                  <h4>King's Highways</h4>
                  <div className="stat-details">
                    <p><strong>Collision Counts:</strong></p>
                    <ul>
                      <li>Mean: 11,838.4</li>
                      <li>Median: 11,813</li>
                      <li>Std Dev: 950.82</li>
                      <li>Range: 3,141 (10,300-13,441)</li>
                    </ul>
                    <p><strong>Collision Rates:</strong></p>
                    <ul>
                      <li>Mean: 0.68</li>
                      <li>Median: 0.7</li>
                      <li>Std Dev: 0.08</li>
                      <li>Range: 0.2 (0.6-0.8)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="stat-card">
                  <h4>Secondary Highways</h4>
                  <div className="stat-details">
                    <p><strong>Collision Counts:</strong></p>
                    <ul>
                      <li>Mean: 904</li>
                      <li>Median: 907</li>
                      <li>Std Dev: 110</li>
                      <li>Range: 352 (755-1,107)</li>
                    </ul>
                    <p><strong>Collision Rates:</strong></p>
                    <ul>
                      <li>Mean: 1.095</li>
                      <li>Median: 1.1</li>
                      <li>Std Dev: 0.12</li>
                      <li>Range: 0.4 (0.9-1.3)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="trend-analysis">
              <h3>Trend Analysis Results</h3>
              <div className="analysis-result">
                <h4>Linear Regression (Freeway Rates)</h4>
                <p><strong>Model:</strong> Rate = β₀ + β₁ × Year</p>
                <ul>
                  <li>Slope (β₁): -0.0009</li>
                  <li>R²: 0.013</li>
                  <li>F-statistic: 0.235</li>
                  <li>p-value: > 0.05 (not significant)</li>
                </ul>
                <p><em>Result: No significant linear trend detected</em></p>
              </div>
              
              <div className="analysis-result">
                <h4>Quadratic Regression</h4>
                <p><strong>Model:</strong> Rate = β₀ + β₁ × Year + β₂ × Year²</p>
                <ul>
                  <li>R²: 0.364</li>
                  <li>F-statistic: 4.86</li>
                  <li>Better fit than linear model</li>
                </ul>
                <p><em>Result: Quadratic model captures fluctuations better</em></p>
              </div>
            </div>

            <div className="correlation-results">
              <h3>Correlation Analysis</h3>
              <ul>
                <li><strong>Freeway counts vs rates:</strong> r ≈ 0.25 (weak positive)</li>
                <li><strong>Freeway vs King's Highway rates:</strong> r ≈ 0.40 (moderate)</li>
                <li><strong>Freeway vs Secondary Highway rates:</strong> r ≈ 0.10 (weak)</li>
              </ul>
            </div>

            <div className="anova-results">
              <h3>Comparative Analysis (ANOVA)</h3>
              <div className="anova-summary">
                <p><strong>One-way ANOVA Results:</strong></p>
                <ul>
                  <li>F(2, 57) = 209</li>
                  <li>p < 0.00001 (highly significant)</li>
                  <li>All pairwise comparisons significant</li>
                </ul>
                <p><em>Conclusion: Significant differences in collision rates between all road types</em></p>
              </div>
            </div>
          </div>
        );

      case 'charts':
        return (
          <div className="content-section">
            <h2>Interactive Data Visualization</h2>
            <p>
              Explore the collision data through interactive charts. Use the buttons below each chart to switch 
              between different visualizations and analyses.
            </p>
            <RoadSafetyCharts />
          </div>
        );

      case 'conclusions':
        return (
          <div className="content-section">
            <h2>Conclusions</h2>
            
            <div className="conclusion-summary">
              <h3>Key Findings</h3>
              <p>
                This study analyzed collision trends on Ontario's Freeways, King's Highways, and Secondary Highways 
                from 2000 to 2019, revealing distinct safety profiles for each road type with important implications 
                for transportation policy.
              </p>
            </div>

            <div className="hypothesis-results">
              <h3>Hypothesis Testing Results</h3>
              <div className="result-card rejected">
                <h4>❌ Primary Hypothesis: REJECTED</h4>
                <p>
                  <strong>Hypothesis:</strong> Freeway collision rates significantly decreased from 2000-2019<br/>
                  <strong>Result:</strong> No statistically significant trend found (p > 0.05, R² = 0.013)<br/>
                  <strong>Finding:</strong> Rates remained stable between 0.5-0.6 per MVKM
                </p>
              </div>
              
              <div className="result-card supported">
                <h4>✅ Secondary Hypothesis: SUPPORTED</h4>
                <p>
                  <strong>Hypothesis:</strong> Weak correlations between collision counts and rates<br/>
                  <strong>Result:</strong> Freeway counts vs rates: r ≈ 0.25 (weak positive)<br/>
                  <strong>Finding:</strong> MVKM normalization effectively accounts for exposure differences
                </p>
              </div>
            </div>

            <div className="key-insights">
              <h3>Critical Insights</h3>
              <div className="insights-grid">
                <div className="insight-card">
                  <h4>🛣️ Road Type Safety Hierarchy</h4>
                  <p>Secondary Highways (1.095) > King's Highways (0.68) > Freeways (0.57)</p>
                  <p><em>ANOVA: F(2,57) = 209, p < 0.00001</em></p>
                </div>
                
                <div className="insight-card">
                  <h4>📊 Freeway Stability</h4>
                  <p>Consistent performance suggests mature safety systems but limited room for traditional improvements</p>
                </div>
                
                <div className="insight-card">
                  <h4>⚠️ Secondary Highway Risk</h4>
                  <p>Highest collision rates with notable outliers in 2003 and 2012 warrant targeted interventions</p>
                </div>
                
                <div className="insight-card">
                  <h4>🔗 Weak Correlations</h4>
                  <p>Low correlations highlight importance of exposure-adjusted metrics over raw counts</p>
                </div>
              </div>
            </div>

            <div className="policy-implications">
              <h3>Policy Implications</h3>
              <ul>
                <li><strong>Prioritize Secondary Highways:</strong> Implement targeted safety interventions including improved road design, signage, and speed enforcement</li>
                <li><strong>Innovation for Freeways:</strong> Explore advanced technologies like autonomous vehicle integration and real-time traffic monitoring</li>
                <li><strong>Data-Driven Approach:</strong> Continue using MVKM-adjusted rates for accurate risk assessment</li>
                <li><strong>Investigate Outliers:</strong> Examine specific high-risk years (2003, 2012) for localized risk factors</li>
              </ul>
            </div>

            <div className="limitations">
              <h3>Study Limitations</h3>
              <ul>
                <li>Limited to 20 annual data points per road type</li>
                <li>Absence of detailed MVKM exposure data and external variables</li>
                <li>Potential reporting bias, especially pre-2011 King's Highways data</li>
                <li>Assumption of normality in ANOVA may not fully hold for all road types</li>
              </ul>
            </div>

            <div className="future-research">
              <h3>Future Research Directions</h3>
              <ul>
                <li>Collect more granular MVKM and exposure data</li>
                <li>Include factors like enforcement intensity and demographic trends</li>
                <li>Investigate causes of specific outlier years using detailed crash reports</li>
                <li>Explore impact of emerging technologies on collision rates</li>
              </ul>
            </div>

            <div className="final-statement">
              <h3>Final Statement</h3>
              <p>
                This project contributes meaningfully to Ontario's road safety landscape by providing a solid foundation 
                for using data management principles to guide traffic safety policy. The findings underscore the elevated 
                risk on Secondary Highways and the need for continued innovation in highway safety, particularly as 
                traditional approaches appear to have reached their effectiveness limits on well-engineered Freeways.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1><Map size={24} /> Ontario Highway Safety Analysis</h1>
          <p>Comprehensive Statistical Analysis of Collision Trends (2000-2019)</p>
        </div>
      </header>

      <nav className="app-navigation">
        <div className="nav-container">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="app-main">
        <div className="main-container">
          {renderContent()}
        </div>
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>© 2025 Boris Rodolphe Foumdji Nde | MDM4U Culminating Project</p>
          <p>Data Source: Ontario Road Safety Annual Report (2000-2019)</p>
        </div>
      </footer>
    </div>
  );
}

export default App;