import Layout from "./Layout.jsx";

import Home from "./Home";

import Portfolio from "./Portfolio";

import Insights from "./Insights";

import InsightDetail from "./InsightDetail";

import ProjectDetail from "./ProjectDetail";

import Testimonials from "./Testimonials";

import ProjectMulberryWoods from "./ProjectMulberryWoods";

import ProjectAzureHeights from "./ProjectAzureHeights";

import ProjectCasaDeLaCosta from "./ProjectCasaDeLaCosta";

import ProjectTheWatersEdge from "./ProjectTheWatersEdge";

import ProjectOakCreekReserve from "./ProjectOakCreekReserve";

import ProjectTheAspenEstate from "./ProjectTheAspenEstate";

import PrivacyPolicy from "./PrivacyPolicy";

import TermsOfService from "./TermsOfService";

import Accessibility from "./Accessibility";

import InsightPostConstruction from "./InsightPostConstruction";

import InsightMaterials from "./InsightMaterials";

import InsightLuxurySystems from "./InsightLuxurySystems";

import Contact from "./Contact";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Portfolio: Portfolio,
    
    Insights: Insights,
    
    InsightDetail: InsightDetail,
    
    ProjectDetail: ProjectDetail,
    
    Testimonials: Testimonials,
    
    ProjectMulberryWoods: ProjectMulberryWoods,
    
    ProjectAzureHeights: ProjectAzureHeights,
    
    ProjectCasaDeLaCosta: ProjectCasaDeLaCosta,
    
    ProjectTheWatersEdge: ProjectTheWatersEdge,
    
    ProjectOakCreekReserve: ProjectOakCreekReserve,
    
    ProjectTheAspenEstate: ProjectTheAspenEstate,
    
    PrivacyPolicy: PrivacyPolicy,
    
    TermsOfService: TermsOfService,
    
    Accessibility: Accessibility,
    
    InsightPostConstruction: InsightPostConstruction,
    
    InsightMaterials: InsightMaterials,
    
    InsightLuxurySystems: InsightLuxurySystems,
    
    Contact: Contact,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Portfolio" element={<Portfolio />} />
                
                <Route path="/Insights" element={<Insights />} />
                
                <Route path="/InsightDetail" element={<InsightDetail />} />
                
                <Route path="/ProjectDetail" element={<ProjectDetail />} />
                
                <Route path="/Testimonials" element={<Testimonials />} />
                
                <Route path="/ProjectMulberryWoods" element={<ProjectMulberryWoods />} />
                
                <Route path="/ProjectAzureHeights" element={<ProjectAzureHeights />} />
                
                <Route path="/ProjectCasaDeLaCosta" element={<ProjectCasaDeLaCosta />} />
                
                <Route path="/ProjectTheWatersEdge" element={<ProjectTheWatersEdge />} />
                
                <Route path="/ProjectOakCreekReserve" element={<ProjectOakCreekReserve />} />
                
                <Route path="/ProjectTheAspenEstate" element={<ProjectTheAspenEstate />} />
                
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                
                <Route path="/TermsOfService" element={<TermsOfService />} />
                
                <Route path="/Accessibility" element={<Accessibility />} />
                
                <Route path="/InsightPostConstruction" element={<InsightPostConstruction />} />
                
                <Route path="/InsightMaterials" element={<InsightMaterials />} />
                
                <Route path="/InsightLuxurySystems" element={<InsightLuxurySystems />} />
                
                <Route path="/Contact" element={<Contact />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}