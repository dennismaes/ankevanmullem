import styled from 'styled-components'

export const Section = styled.div`    
    width: 100%;
    padding: 40px 60px;
    @media (max-width : ${props => props.theme.size.xs}) {
        padding: 30px 20px;
    }
    background-color: ${props => props.bgGrey ? props.theme.color.lightGrey : "white"};
`
export const Wrapper = styled.div`
    display: grid;
    --n: ${props => props.cols ? props.cols : 1};
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill,minmax(max(min((100% -2*20px),240px),(100% - (var(--n) - 1)*20px)/var(--n)),1fr));
`
