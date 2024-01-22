import FooterFour from '@/layout/footer/footer-4';
import React from 'react';
import ProjectDetailsArea from './project-details-area';
import ProjectDetailsBanner from './project-details-banner';

const ProjectDetails = () => {
    return (
        <>
            <ProjectDetailsBanner />
            <ProjectDetailsArea />
            <FooterFour />
        </>
    );
};

export default ProjectDetails;