import styled from 'styled-components'

export const Section = styled.div`    
    width: 100%;
    padding: 40px 60px;
    @media (max-width : ${props => props.theme.size.xs}) {
        padding: 30px 20px;
    }
    background-color: ${props => props.bgGrey ? props.theme.color.lightGrey : "white"};
    h2 {
        ${props => props.bgGrey ? "" : "color:"+props.theme.color.primary}
    }
    h3 {
        ${props => props.bgGrey ? "" : "color:black"}
    }
`
export const Wrapper = styled.div`
    display: grid;
    --n: ${props => props.cols ? props.cols : 1};
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill,minmax(max(min((100% -2*20px),240px),(100% - (var(--n) - 1)*20px)/var(--n)),1fr));
`

export const Sticky = styled(Section)`
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width : ${props => props.theme.size.xs}) {
        padding: 20px 20px;
    }
    
    display: flex;
    flex-wrap: wrap;
    grid-gap: 15px
`
