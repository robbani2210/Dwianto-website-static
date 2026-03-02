import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime, timezone
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

SAMPLE_BLOGS = [
    {
        "slug": "complete-guide-fdi-indonesia-2025",
        "title": "Complete Guide to Foreign Direct Investment in Indonesia 2025",
        "excerpt": "A comprehensive roadmap for international investors looking to establish operations in Indonesia, covering regulatory frameworks, ownership structures, and strategic considerations.",
        "category": "Cross-Border Investment",
        "keywords": ["FDI Indonesia", "foreign direct investment", "Indonesia market entry", "PT PMA", "investment guide"],
        "meta_description": "Expert guide on foreign direct investment in Indonesia. Learn about PT PMA setup, ownership structures, regulations, and strategic market entry planning.",
        "read_time": 15,
        "featured_image": "https://images.unsplash.com/photo-1562367072-fea5c7eb8748?crop=entropy&cs=srgb&fm=jpg&q=85",
        "content": """
<h2>Introduction: Indonesia's Growing Investment Landscape</h2>
<p>Indonesia represents Southeast Asia's largest economy and offers compelling opportunities for foreign direct investment (FDI). With a population exceeding 270 million, a growing middle class, and strategic geographic positioning, the archipelago nation has become a priority market for international investors seeking emerging market exposure.</p>

<p>However, successful FDI in Indonesia requires understanding complex regulatory frameworks, ownership limitations, and strategic structuring. This comprehensive guide provides institutional investors with the knowledge needed to navigate Indonesia's investment landscape effectively.</p>

<h2>Understanding the PT PMA Structure</h2>
<p>Foreign investment in Indonesia is typically conducted through a PT PMA (Perseroan Terbatas Penanaman Modal Asing), or foreign investment limited liability company. This corporate structure allows foreign entities to establish operational presence while complying with Indonesian investment regulations.</p>

<h3>Key Characteristics of PT PMA</h3>
<ul>
<li><strong>Minimum Capitalization:</strong> Standard minimum authorized capital of IDR 10 billion (approximately USD 650,000), though specific sectors may have higher requirements</li>
<li><strong>Paid-Up Capital:</strong> Minimum 25% of authorized capital must be paid up at establishment</li>
<li><strong>Foreign Ownership:</strong> Percentage varies by sector according to the Negative Investment List (DNI - Daftar Negatif Investasi)</li>
<li><strong>Directors:</strong> Minimum one director required (can be foreign national)</li>
<li><strong>Commissioners:</strong> Minimum one commissioner required for oversight</li>
</ul>

<h2>Sector-Specific Ownership Limitations</h2>
<p>Indonesia maintains a Negative Investment List that specifies foreign ownership limitations across various sectors. Understanding these restrictions is critical for investment planning:</p>

<h3>Open Sectors (100% Foreign Ownership)</h3>
<ul>
<li>Manufacturing (most subsectors)</li>
<li>Wholesale and retail trade (with minimum investment thresholds)</li>
<li>Information technology and digital services</li>
<li>Professional services (consulting, advisory)</li>
<li>Tourism infrastructure</li>
</ul>

<h3>Restricted Sectors (Partnership Required)</h3>
<ul>
<li>Mining operations (maximum 49% foreign ownership in some subsectors)</li>
<li>Telecommunications infrastructure (maximum 49-67% depending on license type)</li>
<li>Energy generation and distribution (varies by capacity and type)</li>
<li>Agriculture and plantation (maximum 95% in most subsectors)</li>
<li>Construction services (maximum 67%)</li>
</ul>

<h3>Closed Sectors (Prohibited for Foreign Investment)</h3>
<ul>
<li>Traditional medicine production</li>
<li>Certain chemical production categories</li>
<li>Specific cultural and historical activities</li>
</ul>

<h2>The PT PMA Establishment Process</h2>
<p>Establishing a PT PMA involves multiple regulatory stages and coordination with Indonesian authorities:</p>

<h3>Phase 1: Pre-Establishment (4-6 weeks)</h3>
<ol>
<li><strong>Business Activity Classification:</strong> Determine KBLI (Indonesian Standard Industrial Classification) codes</li>
<li><strong>Company Name Reservation:</strong> Submit and secure company name approval through OSS (Online Single Submission) system</li>
<li><strong>Domicile Letter:</strong> Obtain domicile confirmation from planned business location</li>
<li><strong>Deed of Establishment:</strong> Notarize company establishment deed with authorized Indonesian notary</li>
</ol>

<h3>Phase 2: Licensing and Registration (6-8 weeks)</h3>
<ol>
<li><strong>Ministry of Law Registration:</strong> Register PT PMA with Ministry of Law and Human Rights</li>
<li><strong>Tax Registration:</strong> Obtain NPWP (Tax Identification Number) and PKP (Taxable Entrepreneur Number)</li>
<li><strong>Investment Licensing:</strong> Secure investment principle approval through BKPM/OSS</li>
<li><strong>Sector-Specific Licenses:</strong> Apply for operational licenses required for business activities</li>
</ol>

<h3>Phase 3: Operational Setup (8-12 weeks)</h3>
<ol>
<li><strong>Bank Account Opening:</strong> Establish corporate banking relationships</li>
<li><strong>Capital Injection:</strong> Transfer minimum paid-up capital to corporate account</li>
<li><strong>Accounting System Setup:</strong> Implement compliant financial reporting framework</li>
<li><strong>Employment Documentation:</strong> Prepare for hiring including work permit procedures for expatriates</li>
</ol>

<h2>Strategic Considerations for Successful FDI</h2>

<h3>Local Partnership Evaluation</h3>
<p>For sectors requiring local partnership, selecting the right Indonesian partner is critical:</p>
<ul>
<li><strong>Financial Capability:</strong> Partner must have resources to meet capital contribution requirements</li>
<li><strong>Industry Knowledge:</strong> Local market intelligence and regulatory expertise</li>
<li><strong>Governance Alignment:</strong> Compatible business practices and reporting standards</li>
<li><strong>Exit Mechanisms:</strong> Clear shareholder agreement provisions for dispute resolution and exit</li>
</ul>

<h3>Tax and Capital Efficiency</h3>
<p>Structuring FDI through optimal jurisdictions can enhance after-tax returns:</p>
<ul>
<li><strong>Holding Company Jurisdiction:</strong> Singapore and Hong Kong offer favorable tax treaties with Indonesia</li>
<li><strong>Withholding Tax Optimization:</strong> Treaty benefits can reduce dividend withholding from 20% to 10% or lower</li>
<li><strong>Transfer Pricing Compliance:</strong> Arm's length pricing documentation essential for intercompany transactions</li>
<li><strong>Investment Allowances:</strong> Pioneer industry status and special economic zone benefits available for qualifying activities</li>
</ul>

<h2>Governance and Compliance Framework</h2>

<h3>Board Structure and Reporting</h3>
<p>PT PMA companies must implement governance frameworks meeting both Indonesian regulatory requirements and international investor standards:</p>
<ul>
<li><strong>Board of Directors:</strong> Executive management with operational authority</li>
<li><strong>Board of Commissioners:</strong> Supervisory board providing oversight</li>
<li><strong>General Meeting of Shareholders:</strong> Ultimate decision-making authority on material matters</li>
<li><strong>Audit Committee:</strong> Recommended for investor-backed companies to ensure financial integrity</li>
</ul>

<h3>Financial Reporting Requirements</h3>
<ul>
<li>Annual audited financial statements filed with Ministry of Law</li>
<li>Quarterly activity reports submitted through OSS system</li>
<li>Monthly tax reporting (VAT, withholding tax, corporate income tax installments)</li>
<li>Annual investment realization reports to BKPM</li>
</ul>

<h2>Risk Factors and Mitigation Strategies</h2>

<h3>Regulatory Evolution</h3>
<p>Indonesia's regulatory environment continues evolving with periodic updates to investment regulations, labor laws, and sector-specific requirements. Successful investors maintain:</p>
<ul>
<li>Active monitoring of regulatory developments</li>
<li>Relationships with local legal and advisory firms</li>
<li>Membership in relevant industry associations</li>
<li>Regular compliance audits and documentation reviews</li>
</ul>

<h3>Operational Challenges</h3>
<p>Common operational challenges and mitigation approaches:</p>
<ul>
<li><strong>Infrastructure:</strong> Logistics and supply chain complexity - diversified sourcing strategies</li>
<li><strong>Talent Acquisition:</strong> Competition for skilled labor - investment in training and development</li>
<li><strong>Bureaucratic Processes:</strong> Administrative complexity - engagement of experienced local advisors</li>
<li><strong>Currency Volatility:</strong> IDR fluctuations - hedging strategies and natural hedges through local revenue</li>
</ul>

<h2>Conclusion: The Path Forward</h2>
<p>Foreign direct investment in Indonesia offers substantial opportunities for investors who approach the market with appropriate preparation, local expertise, and structured execution. Success requires understanding regulatory frameworks, selecting optimal ownership structures, implementing robust governance, and maintaining long-term commitment to the market.</p>

<p>At Dwianto Capital Advisory, we provide integrated advisory services that transform FDI intent into operational reality - from initial feasibility assessment through PT PMA establishment, licensing coordination, and ongoing compliance management.</p>

<p>For investors considering Indonesian market entry, we recommend beginning with comprehensive feasibility analysis that addresses sector regulations, ownership structuring, capital requirements, and timeline planning. This foundation enables informed investment decisions and structured execution that reduces risk while accelerating time to market.</p>
"""
    },
    {
        "slug": "pt-pma-setup-guide-foreign-investors",
        "title": "PT PMA Setup: Essential Guide for Foreign Investors",
        "excerpt": "Step-by-step guidance on establishing a PT PMA (foreign investment company) in Indonesia, covering legal requirements, capital structure, and operational setup.",
        "category": "Cross-Border Investment",
        "keywords": ["PT PMA setup", "foreign investment Indonesia", "company registration", "Indonesia business setup", "market entry"],
        "meta_description": "Complete guide to PT PMA establishment in Indonesia. Learn the requirements, process, timeline, and costs for setting up a foreign investment company.",
        "read_time": 12,
        "featured_image": "https://images.unsplash.com/photo-1760238470825-ad51d32fa7a5?crop=entropy&cs=srgb&fm=jpg&q=85",
        "content": """
<h2>Understanding PT PMA: Legal Framework and Purpose</h2>
<p>PT PMA (Perseroan Terbatas Penanaman Modal Asing) is the designated legal entity structure for foreign investors establishing commercial operations in Indonesia. This corporate form combines the flexibility of limited liability with regulatory compliance frameworks designed to facilitate foreign investment while protecting local interests.</p>

<h3>Key Legal Foundations</h3>
<ul>
<li><strong>Company Law No. 40/2007:</strong> Governs general corporate structure and obligations</li>
<li><strong>Investment Law No. 25/2007:</strong> Establishes framework for foreign and domestic investment</li>
<li><strong>Presidential Regulation 10/2021:</strong> Defines sector-specific investment conditions through Negative Investment List</li>
<li><strong>Government Regulation 5/2021:</strong> Simplifies licensing through OSS Risk-Based Approach</li>
</ul>

<h2>Pre-Establishment Requirements and Planning</h2>

<h3>Capital Structure Planning</h3>
<p>Determining appropriate capital structure is critical for PT PMA success:</p>

<h4>Authorized Capital (Modal Dasar)</h4>
<ul>
<li>Standard minimum: IDR 10 billion (approximately USD 650,000)</li>
<li>Sector-specific variations apply (telecommunications, banking, insurance have higher thresholds)</li>
<li>No maximum limit - determined by business plan and shareholder agreement</li>
</ul>

<h4>Issued Capital (Modal Ditempatkan)</h4>
<ul>
<li>Minimum 25% of authorized capital must be issued at establishment</li>
<li>Represents committed shareholder investment</li>
<li>Must be documented in establishment deed</li>
</ul>

<h4>Paid-Up Capital (Modal Disetor)</h4>
<ul>
<li>Minimum 25% of authorized capital (equal to issued capital minimum)</li>
<li>Must be transferred to company bank account before business operations commence</li>
<li>Bank confirmation letter required for licensing</li>
</ul>

<h3>Shareholder Structure Considerations</h3>
<p>Foreign ownership percentage depends on business sector classification:</p>
<ul>
<li><strong>Open Sectors:</strong> 100% foreign ownership permitted</li>
<li><strong>Conditional Sectors:</strong> Foreign ownership limited (typically 49%, 67%, or 95%)</li>
<li><strong>Partnership Required:</strong> Local partner must be Indonesian individual or Indonesian-owned entity meeting specific criteria</li>
</ul>

<h2>The PT PMA Establishment Process: Step-by-Step</h2>

<h3>Stage 1: Company Name and Business Classification (Week 1-2)</h3>
<ol>
<li><strong>Business Activity Selection:</strong>
   <ul>
   <li>Identify appropriate KBLI (Indonesian Standard Industrial Classification) codes</li>
   <li>Verify foreign ownership permissions for selected activities</li>
   <li>Ensure alignment with Negative Investment List provisions</li>
   </ul>
</li>
<li><strong>Company Name Reservation:</strong>
   <ul>
   <li>Submit name application through OSS (Online Single Submission) system</li>
   <li>Name must be unique, not similar to existing registered companies</li>
   <li>Avoid restricted words requiring special approvals</li>
   <li>Approval typically granted within 1-3 business days</li>
   </ul>
</li>
</ol>

<h3>Stage 2: Legal Documentation (Week 2-4)</h3>
<ol>
<li><strong>Domicile Letter Acquisition:</strong>
   <ul>
   <li>Obtain from RT/RW (neighborhood administration) of planned office location</li>
   <li>Requires proof of office right (lease agreement or ownership)</li>
   <li>Processing time: 3-7 business days</li>
   </ul>
</li>
<li><strong>Deed of Establishment Preparation:</strong>
   <ul>
   <li>Draft by authorized Indonesian notary (notaris)</li>
   <li>Must include articles of association compliant with Company Law</li>
   <li>Shareholders' agreement provisions (if multiple shareholders)</li>
   <li>Commissioner and director appointments documented</li>
   </ul>
</li>
<li><strong>Ministry of Law Approval:</strong>
   <ul>
   <li>Notary submits deed to Ministry of Law and Human Rights</li>
   <li>Approval confirms legal entity status</li>
   <li>Processing time: 10-14 business days</li>
   </ul>
</li>
</ol>

<h3>Stage 3: Tax and Investment Registration (Week 4-8)</h3>
<ol>
<li><strong>Tax Identification Numbers:</strong>
   <ul>
   <li>NPWP (Nomor Pokok Wajib Pajak): Company tax ID</li>
   <li>PKP (Pengusaha Kena Pajak): VAT collector status</li>
   <li>Registered through OSS system automatically or via tax office directly</li>
   </ul>
</li>
<li><strong>Investment Principal Licensing:</strong>
   <ul>
   <li>Submit business plan and capital confirmation documents</li>
   <li>Processed through BKPM (Investment Coordinating Board) via OSS</li>
   <li>Investment license (Izin Usaha) granted upon approval</li>
   </ul>
</li>
<li><strong>Business Identification Number (NIB):</strong>
   <ul>
   <li>Functions as unified business license and tax number</li>
   <li>Automatically generated through OSS upon registration completion</li>
   <li>Contains embedded licensing information</li>
   </ul>
</li>
</ol>

<h3>Stage 4: Operational Licenses (Week 8-16)</h3>
<p>Sector-specific operational licenses required before commencing business:</p>

<h4>Trade Sector</h4>
<ul>
<li>Trading Business License (SIUP) - now integrated into NIB</li>
<li>Import Identification Number (API) if importing goods</li>
<li>Customs registration for import/export activities</li>
</ul>

<h4>Manufacturing Sector</h4>
<ul>
<li>Industrial Business License (IUI)</li>
<li>Environmental permits (UKL-UPL or AMDAL depending on scale)</li>
<li>Building permits for manufacturing facilities</li>
</ul>

<h4>Services Sector</h4>
<ul>
<li>Professional service licenses (varies by service type)</li>
<li>Office occupancy permits</li>
<li>Sector regulator approvals where applicable</li>
</ul>

<h2>Capital Injection and Banking</h2>

<h3>Corporate Bank Account Opening</h3>
<p>Process and requirements:</p>
<ol>
<li>Select Indonesian bank (local or foreign bank branch)</li>
<li>Submit company establishment documents and tax registration</li>
<li>Director identification and KYC documentation</li>
<li>Board resolution authorizing account opening and signatories</li>
<li>Account opening typically takes 2-4 weeks</li>
</ol>

<h3>Minimum Capital Transfer</h3>
<ul>
<li>Transfer from foreign shareholders to PT PMA bank account</li>
<li>Bank Indonesia reporting requirements for foreign exchange transactions</li>
<li>Capital injection letter from bank required for investment licensing</li>
<li>Maintain evidence of fund source for regulatory compliance</li>
</ul>

<h2>Post-Establishment Compliance Obligations</h2>

<h3>Ongoing Reporting Requirements</h3>

<h4>Investment Coordinating Board (BKPM)</h4>
<ul>
<li>Quarterly investment activity reports via OSS</li>
<li>Annual investment realization report</li>
<li>Capital adjustment notifications (if increasing or decreasing capital)</li>
</ul>

<h4>Tax Office</h4>
<ul>
<li>Monthly VAT reporting (if PKP status)</li>
<li>Monthly withholding tax reporting (Article 21, 23, 26)</li>
<li>Quarterly corporate income tax installments</li>
<li>Annual corporate income tax return</li>
</ul>

<h4>Ministry of Law and Human Rights</h4>
<ul>
<li>Annual financial statements submission</li>
<li>Annual shareholders meeting minutes filing</li>
<li>Changes to company structure (shareholders, directors, commissioners) require approval</li>
</ul>

<h2>Common Challenges and Solutions</h2>

<h3>Regulatory Navigation</h3>
<p><strong>Challenge:</strong> Complex and frequently updated regulations</p>
<p><strong>Solution:</strong> Engage experienced local legal and advisory firms maintaining current regulatory knowledge</p>

<h3>Licensing Timeline Uncertainty</h3>
<p><strong>Challenge:</strong> Government processing times can vary significantly</p>
<p><strong>Solution:</strong> Build buffer into project timelines; maintain proactive communication with licensing authorities</p>

<h3>Capital Requirements Interpretation</h3>
<p><strong>Challenge:</strong> Ambiguity in capital requirements for specific business activities</p>
<p><strong>Solution:</strong> Obtain pre-confirmation from BKPM regarding capital adequacy for intended business scope</p>

<h3>Local Partner Selection (for restricted sectors)</h3>
<p><strong>Challenge:</strong> Finding qualified, aligned local partners</p>
<p><strong>Solution:</strong> Comprehensive due diligence on partner financial capacity, business reputation, and governance practices</p>

<h2>Cost Considerations</h2>

<h3>Government Fees and Taxes</h3>
<ul>
<li>Notary fees: IDR 8-15 million</li>
<li>Ministry of Law registration: IDR 1-2 million</li>
<li>Tax registration: No fee (online)</li>
<li>BKPM licensing: No fee (online through OSS)</li>
</ul>

<h3>Professional Services</h3>
<ul>
<li>Legal advisory: USD 3,000 - 8,000 (depending on complexity)</li>
<li>Accounting setup: USD 1,000 - 3,000</li>
<li>Office lease deposits: Variable (typically 3-6 months advance rent)</li>
</ul>

<h3>Capital Requirements</h3>
<ul>
<li>Minimum paid-up capital: IDR 2.5 billion (approximately USD 160,000) for standard PT PMA</li>
<li>Additional working capital for initial operations</li>
</ul>

<h2>Strategic Advisory Recommendations</h2>

<h3>Pre-Investment Due Diligence</h3>
<p>Before initiating PT PMA establishment, conduct comprehensive feasibility assessment:</p>
<ul>
<li>Sector regulation verification and foreign ownership confirmation</li>
<li>Market demand analysis and competitive landscape review</li>
<li>Location assessment considering infrastructure, talent availability, and proximity to customers/suppliers</li>
<li>Tax and legal structure optimization (consider holding company jurisdiction)</li>
</ul>

<h3>Phased Approach to Market Entry</h3>
<p>For investors new to Indonesia, consider staged entry:</p>
<ol>
<li><strong>Phase 1:</strong> Representative office (KPPA) for market research and relationship building (6-12 months)</li>
<li><strong>Phase 2:</strong> PT PMA establishment with limited initial scope</li>
<li><strong>Phase 3:</strong> Business expansion and scaling once operational familiarity established</li>
</ol>

<h2>Conclusion</h2>
<p>PT PMA establishment in Indonesia requires navigating regulatory frameworks, satisfying capital requirements, and implementing compliant operational structures. Success depends on thorough preparation, engagement of experienced local advisors, and realistic timeline expectations.</p>

<p>Foreign investors who approach PT PMA setup with structured planning, appropriate capital allocation, and professional advisory support can establish operational presence efficiently while building foundations for long-term success in Indonesia's growing market.</p>

<p>For comprehensive PT PMA establishment advisory - from initial feasibility assessment through operational readiness - contact Dwianto Capital Advisory for a confidential consultation.</p>
"""
    },
    {
        "slug": "ma-advisory-indonesia-market-overview",
        "title": "M&A Advisory in Indonesia: Market Overview and Opportunities",
        "excerpt": "Analysis of Indonesia's M&A landscape, key sectors attracting acquisition activity, valuation considerations, and strategic insights for cross-border transactions.",
        "category": "M&A",
        "keywords": ["M&A Indonesia", "mergers acquisitions", "Indonesia M&A market", "acquisition opportunities", "cross-border M&A"],
        "meta_description": "Expert analysis of Indonesia's M&A market. Discover opportunities, valuation trends, and strategic considerations for successful acquisitions.",
        "read_time": 14,
        "featured_image": "https://images.unsplash.com/photo-1764087957302-ef0756ed8e0a?crop=entropy&cs=srgb&fm=jpg&q=85",
        "content": """
<h2>Indonesia M&A Landscape: Current State and Trajectory</h2>
<p>Indonesia's mergers and acquisitions market has evolved significantly over the past decade, transforming from opportunistic deal-making to strategic consolidation driven by both domestic conglomerates and international investors. The market's evolution reflects Indonesia's maturing economy, improved regulatory frameworks, and increasing integration into global capital flows.</p>

<h3>Market Size and Deal Volume Trends</h3>
<p>Key metrics characterizing Indonesia's M&A activity:</p>
<ul>
<li><strong>Annual Deal Volume:</strong> 150-200 transactions in recent years (combination of announced and completed deals)</li>
<li><strong>Deal Value Range:</strong> Total disclosed deal value fluctuates between USD 8-15 billion annually</li>
<li><strong>Average Transaction Size:</strong> USD 50-80 million for mid-market deals; mega-deals (USD 500M+) account for significant portion of total value</li>
<li><strong>Cross-Border Participation:</strong> Foreign investors involved in 40-50% of total deal value, primarily from Singapore, Japan, South Korea, and increasingly China</li>
</ul>

<h2>Strategic Drivers Behind M&A Activity</h2>

<h3>Foreign Strategic Investors</h3>
<p>International corporations pursue acquisitions in Indonesia driven by several strategic imperatives:</p>

<h4>Market Access and Scale</h4>
<ul>
<li>Population of 270+ million providing consumer market scale</li>
<li>Growing middle class with increasing purchasing power</li>
<li>Urban concentration in major cities creating addressable market density</li>
</ul>

<h4>Digital Economy Participation</h4>
<ul>
<li>High mobile penetration and digital adoption rates</li>
<li>E-commerce growth exceeding 20% annually</li>
<li>Fintech and digital services expansion opportunities</li>
</ul>

<h4>Supply Chain Diversification</h4>
<ul>
<li>Manufacturing capabilities as alternative to China-centric supply chains</li>
<li>Natural resource access (commodities, agricultural products)</li>
<li>Strategic positioning for ASEAN market access</li>
</ul>

<h3>Domestic Consolidation Drivers</h3>
<p>Indonesian conglomerates and corporates pursue M&A for:</p>
<ul>
<li>Horizontal consolidation to achieve scale and market share</li>
<li>Vertical integration to control supply chains and margins</li>
<li>Portfolio diversification into growth sectors</li>
<li>Technology and capability acquisition</li>
</ul>

<h2>Sector Analysis: M&A Hotspots</h2>

<h3>Technology and Digital Services (High Activity, High Valuation)</h3>
<p>Indonesia's technology sector attracts significant M&A and investment activity:</p>

<h4>Key Subsectors</h4>
<ul>
<li><strong>E-Commerce:</strong> Platform consolidation, logistics acquisitions, last-mile delivery infrastructure</li>
<li><strong>Fintech:</strong> Digital payments, lending platforms, digital banking enablers</li>
<li><strong>Edtech:</strong> Online learning platforms, vocational training technology</li>
<li><strong>Healthtech:</strong> Telemedicine, pharmacy delivery, health services platforms</li>
</ul>

<h4>Valuation Characteristics</h4>
<ul>
<li>Revenue multiples: 3-8x for established platforms with strong GMV growth</li>
<li>Growth-stage companies command premium valuations based on user acquisition metrics</li>
<li>Profitability increasingly important for valuation support (shift from pure growth focus)</li>
</ul>

<h3>Consumer and Retail (Moderate-High Activity, Moderate Valuation)</h3>
<p>Consumer-facing businesses remain attractive for strategic and financial investors:</p>

<h4>Active Segments</h4>
<ul>
<li>Quick-service restaurants and food & beverage chains</li>
<li>Branded consumer products with established distribution</li>
<li>Specialty retail and lifestyle brands</li>
<li>Consumer services (beauty, wellness, personal care)</li>
</ul>

<h4>Deal Dynamics</h4>
<ul>
<li>Foreign buyers often acquire majority stakes to gain control and implement operational improvements</li>
<li>Valuation typically 6-10x EBITDA for established brands with market leadership</li>
<li>Store count, same-store sales growth, and brand strength key value drivers</li>
</ul>

<h3>Financial Services (Moderate Activity, High Regulatory Complexity)</h3>
<p>Banking, insurance, and financial services sectors attract interest but face regulatory constraints:</p>

<h4>Transaction Types</h4>
<ul>
<li>Minority stakes in banks (foreign ownership limited to 40% for most banks)</li>
<li>Insurance company acquisitions (80% foreign ownership permitted)</li>
<li>Finance companies and specialty lenders (100% foreign ownership possible)</li>
</ul>

<h4>Valuation Metrics</h4>
<ul>
<li>Price-to-book ratios: 1.5-3.0x for performing banks</li>
<li>Price-to-earnings: 10-15x for insurance companies</li>
<li>Asset quality and regulatory capital position critical to valuation</li>
</ul>

<h3>Infrastructure and Energy (Large-Scale, Strategic)</h3>
<p>Infrastructure and energy sectors see significant deal values but lower transaction frequency:</p>

<h4>Investment Focus Areas</h4>
<ul>
<li>Renewable energy assets (geothermal, hydroelectric, solar)</li>
<li>Toll road concessions and transportation infrastructure</li>
<li>Ports and logistics infrastructure</li>
<li>Power generation and distribution assets</li>
</ul>

<h4>Deal Characteristics</h4>
<ul>
<li>Consortium structures common due to large capital requirements</li>
<li>Government partnership often required (concession-based assets)</li>
<li>Long-term cash flow visibility supports higher valuations (8-12x EBITDA)</li>
</ul>

<h2>Transaction Structuring Considerations</h2>

<h3>Legal Structure Options</h3>

<h4>Direct Asset Acquisition</h4>
<p><strong>Advantages:</strong></p>
<ul>
<li>Buyer selects specific assets and liabilities to acquire</li>
<li>Avoid assuming unknown or contingent liabilities</li>
<li>Tax basis step-up in acquired assets</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
<li>Requires contract assignments and third-party consents</li>
<li>May trigger higher transfer taxes</li>
<li>Employee transfer complexity</li>
</ul>

<h4>Share Purchase</h4>
<p><strong>Advantages:</strong></p>
<ul>
<li>Simpler execution - all assets and contracts transfer with share ownership</li>
<li>Lower transfer tax burden (0.1% of transaction value vs. land transfer tax rates)</li>
<li>Business continuity maintained</li>
</ul>
<p><strong>Disadvantages:</strong></p>
<ul>
<li>Buyer assumes all company liabilities (known and unknown)</li>
<li>Requires comprehensive due diligence</li>
<li>May need seller warranties and indemnities</li>
</ul>

<h3>Valuation Methodologies and Considerations</h3>

<h4>Comparable Company Analysis</h4>
<ul>
<li>Public market multiples from listed Indonesian and regional comparables</li>
<li>Adjustments for size, growth, profitability differences</li>
<li>Illiquidity discounts for private companies (15-30%)</li>
</ul>

<h4>Precedent Transaction Analysis</h4>
<ul>
<li>Multiples paid in comparable M&A transactions</li>
<li>Premium for control (typically 20-40% above public market valuations)</li>
<li>Consideration of transaction timing and market conditions</li>
</ul>

<h4>Discounted Cash Flow</h4>
<ul>
<li>WACC considerations: equity risk premium 8-10% for Indonesia</li>
<li>Country risk and currency risk factored into discount rate</li>
<li>Terminal value typically 60-75% of enterprise value</li>
</ul>

<h2>Due Diligence: Indonesia-Specific Considerations</h2>

<h3>Legal and Regulatory Due Diligence</h3>

<h4>Critical Review Areas</h4>
<ul>
<li><strong>Land Rights:</strong> Verification of land ownership or usage rights (HGB, HGU)</li>
<li><strong>Licensing Compliance:</strong> Confirmation all required business and operational licenses current and transferable</li>
<li><strong>Foreign Ownership:</strong> Verification target business activities permit intended foreign ownership level</li>
<li><strong>Labor Matters:</strong> Review employment agreements, union relationships, severance obligations</li>
<li><strong>Environmental Compliance:</strong> Assessment of environmental permits and potential liabilities</li>
</ul>

<h3>Financial Due Diligence</h3>

<h4>Key Focus Areas</h4>
<ul>
<li><strong>Quality of Earnings:</strong> Normalize for non-recurring items, related party transactions, owner adjustments</li>
<li><strong>Working Capital:</strong> Assess normalized working capital requirements and seasonal variations</li>
<li><strong>Tax Compliance:</strong> Review tax filings, potential exposures, transfer pricing documentation</li>
<li><strong>Related Party Transactions:</strong> Identify and evaluate all dealings with company shareholders and affiliates</li>
</ul>

<h3>Commercial Due Diligence</h3>

<h4>Market Position Assessment</h4>
<ul>
<li>Customer concentration analysis and contract terms review</li>
<li>Competitive positioning and market share verification</li>
<li>Growth strategy viability and capital requirements</li>
<li>Management team capability and retention planning</li>
</ul>

<h2>Negotiation Dynamics and Deal Terms</h2>

<h3>Price Structure</h3>
<ul>
<li><strong>Upfront Cash:</strong> Typical structure 70-90% of total consideration paid at closing</li>
<li><strong>Earnouts:</strong> Performance-based payments over 1-3 years (common in growth businesses)</li>
<li><strong>Seller Financing:</strong> Occasional use in founder-owned business sales</li>
</ul>

<h3>Key Agreement Terms</h3>

<h4>Purchase Agreement Provisions</h4>
<ul>
<li>Representations and warranties covering all material aspects of business</li>
<li>Indemnification provisions (caps, baskets, survival periods)</li>
<li>Material adverse change clauses</li>
<li>Closing conditions precedent</li>
</ul>

<h4>Shareholders' Agreement (for minority investments)</h4>
<ul>
<li>Governance rights: board representation, veto rights on material matters</li>
<li>Information rights and inspection provisions</li>
<li>Liquidity provisions: drag-along, tag-along, put/call options</li>
<li>Anti-dilution protection</li>
</ul>

<h2>Regulatory Approvals and Timeline</h2>

<h3>Indonesia Competition Commission (KPPU)</h3>
<p>Merger notification required if transaction meets thresholds:</p>
<ul>
<li>Combined assets or revenues exceed IDR 2.5 trillion (approximately USD 165 million)</li>
<li>Acquired company's assets or revenues exceed IDR 250 billion (approximately USD 16.5 million)</li>
<li>Filing deadline: 30 business days post-closing (post-merger notification)</li>
<li>KPPU may request additional information or impose conditions</li>
</ul>

<h3>Sector-Specific Approvals</h3>
<ul>
<li><strong>Banking/Financial Services:</strong> Indonesia Financial Services Authority (OJK) approval required (3-6 months)</li>
<li><strong>Telecommunications:</strong> Ministry of Communication and Informatics approval (2-4 months)</li>
<li><strong>Mining:</strong> Ministry of Energy and Mineral Resources consent (2-3 months)</li>
</ul>

<h3>Typical Transaction Timeline</h3>
<ol>
<li><strong>Preliminary Discussions and NDA:</strong> 2-4 weeks</li>
<li><strong>Initial Offer and Exclusivity:</strong> 2-3 weeks</li>
<li><strong>Due Diligence:</strong> 6-12 weeks (depending on company complexity)</li>
<li><strong>Documentation and Negotiation:</strong> 4-8 weeks</li>
<li><strong>Regulatory Approvals:</strong> 4-12 weeks (if required)</li>
<li><strong>Closing:</strong> 1-2 weeks post-approvals</li>
</ol>

<h2>Common Deal Challenges and Risk Mitigation</h2>

<h3>Valuation Gaps</h3>
<p><strong>Challenge:</strong> Divergent price expectations between buyers and sellers</p>
<p><strong>Mitigation:</strong> Earnout structures tying payment to future performance; phased acquisition approach</p>

<h3>Due Diligence Findings</h3>
<p><strong>Challenge:</strong> Material issues discovered during due diligence</p>
<p><strong>Mitigation:</strong> Price adjustment mechanisms; specific indemnities; escrow arrangements</p>

<h3>Regulatory Uncertainty</h3>
<p><strong>Challenge:</strong> Evolving regulations or approval timeline unpredictability</p>
<p><strong>Mitigation:</strong> Pre-clearance discussions with regulators; contingent deal structures</p>

<h3>Post-Acquisition Integration</h3>
<p><strong>Challenge:</strong> Cultural differences and operational integration complexity</p>
<p><strong>Mitigation:</strong> Detailed integration planning pre-close; retention of key management; phased implementation</p>

<h2>Strategic Advisory Perspective</h2>

<h3>For Foreign Buyers</h3>
<ul>
<li>Prioritize targets with institutional financial reporting and governance practices</li>
<li>Assess management team quality and retention probability</li>
<li>Understand local partner requirements if entering restricted sectors</li>
<li>Build buffer into timelines for regulatory approvals and administrative processes</li>
<li>Consider acquisition as first phase of multi-year growth investment</li>
</ul>

<h3>For Indonesian Sellers</h3>
<ul>
<li>Prepare company for sale 12-18 months in advance (financial cleanup, documentation organization)</li>
<li>Obtain professional valuation to establish realistic price expectations</li>
<li>Address material issues proactively rather than during buyer due diligence</li>
<li>Consider multiple buyer approaches to create competitive tension</li>
<li>Engage experienced M&A advisors to manage process and negotiations</li>
</ul>

<h2>Outlook: Indonesia M&A Market Prospects</h2>

<h3>Growth Drivers</h3>
<ul>
<li>Continued digital economy expansion attracting strategic investment</li>
<li>Infrastructure development creating privatization and consolidation opportunities</li>
<li>ESG focus driving investment in renewable energy and sustainable businesses</li>
<li>Demographic dividend supporting consumer-facing business growth</li>
</ul>

<h3>Headwinds</h3>
<ul>
<li>Global economic uncertainty affecting cross-border investment appetite</li>
<li>Valuation recalibration as interest rates normalize</li>
<li>Regulatory evolution requiring ongoing compliance adaptation</li>
</ul>

<h2>Conclusion</h2>
<p>Indonesia's M&A market offers substantial opportunities for both strategic and financial investors. Success requires understanding sector dynamics, conducting rigorous due diligence, structuring transactions appropriately, and maintaining realistic expectations regarding timelines and execution complexity.</p>

<p>Dwianto Capital Advisory provides comprehensive M&A advisory services spanning target identification, valuation analysis, due diligence coordination, transaction negotiation, and closing execution. Our integrated approach combines financial modeling expertise with regulatory knowledge and market intelligence to deliver successful outcomes for domestic and international clients.</p>

<p>For M&A advisory support or to discuss specific acquisition opportunities in Indonesia, contact our team for a confidential consultation.</p>
"""
    }
]

async def seed_blogs():
    """Seed the database with sample blog posts."""
    print("Starting blog seeding process...")
    
    try:
        # Check if blogs already exist
        existing_count = await db.blogs.count_documents({})
        if existing_count > 0:
            print(f"Found {existing_count} existing blogs. Clearing collection...")
            await db.blogs.delete_many({})
        
        # Insert sample blogs
        for blog_data in SAMPLE_BLOGS:
            blog_data['published_date'] = datetime.now(timezone.utc).isoformat()
            blog_data['author'] = 'Dwianto Capital Advisory'
            blog_data['published'] = True
            
            result = await db.blogs.insert_one(blog_data)
            print(f"✓ Inserted blog: {blog_data['title']} (ID: {result.inserted_id})")
        
        print(f"\n✓ Successfully seeded {len(SAMPLE_BLOGS)} blog posts!")
        
    except Exception as e:
        print(f"✗ Error seeding blogs: {e}")
    finally:
        client.close()

if __name__ == "__main__":
    asyncio.run(seed_blogs())
