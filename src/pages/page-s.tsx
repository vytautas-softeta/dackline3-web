import * as React from 'react';
import { FC } from 'react';
import { graphql } from 'gatsby';

interface PageSProps {
    data: any;
}

const PageS: FC<PageSProps> = ({ data }) => {
    const s = 'ddd';
    return <>{data.site.siteMetadata.description} data.site.siteMetadata.description</>;
};

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                description
            }
        }
    }
`;

export default PageS;
