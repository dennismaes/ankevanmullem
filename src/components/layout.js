import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from "styled-components"

import { GlobalStyle } from '../styles/globalstyle';
import { theme } from '../styles/theme'

import ProfileSection from './profilesection'
import Footer from '../components/footer'


const Column = styled.div`
    display           : flex;
    flex-wrap         : wrap;
    justify-content   : space-around;
    box-sizing : border-box;
    min-height: 100%;
    flex-direction: column;
`

const ColumnLeft = styled(Column)`
    display     :block;
    width      : 50%;
    text-align : center;
    overflow   : hidden;
    position   : fixed;
    left       : 0;
    @media (max-width : ${props => props.theme.size.s}) {
        width    : 100%;
        position : relative;
    }
`

const ColumnRight = styled(Column)`
    width      : 50%;
    position   : absolute;
    right      : 0;
    box-shadow : -10px -10px 30px rgba(0, 0, 0, 0.2);
    @media (max-width : ${props => props.theme.size.s}) {
        width    : 100%;
        position : relative;
        box-shadow : none;
    }
`

const Main = styled.main`
    flex: 1;
`

export default function Layout({ children }) {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
    )
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Helmet 
                    title={data.site.siteMetadata.title} 
                    htmlAttributes={{ lang : 'nl' }}
                />
                <GlobalStyle />
                <ColumnLeft>
                    <ProfileSection />
                </ColumnLeft>
                <ColumnRight>
                    <Main>
                        {children}
                    </Main>
                    <Footer />
                </ColumnRight>
            </Fragment>
        </ThemeProvider>
    )
}