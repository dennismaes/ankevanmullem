import styled from 'styled-components'

export const Timeline = styled.div`
    line-height: 1.5em;
	transition: all .4s ease;
	position: relative;
	counter-reset: section;
	
	&:before {
		content:"";
		width: 0.3em;
		height: 100%;
		background: ${props => props.theme.color.primary};
		position: absolute;
		top: 0;
        left:0;
        right:0;
        margin-left:auto;
        margin-right:auto;
		border-radius: 40px 40px;
	}

    display: grid;
    column-gap: 3em;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "left ."
        "left right"
        ". right";
    
    @media (max-width : ${props => props.theme.size.m}) {
        grid-template-columns: 1fr;
        grid-template-areas:
        "left"
        "right";
        padding-left: 2em;
        &:before {
            left: 0.35em;
            right:auto;
        }
    }
`

export const TimlineEntry = styled.dl`
    height: fit-content;

    &:first-child {
        grid-area: left;
    }
    &:nth-child(2) {
        grid-area: right;
    }
    grid-row: span 2;
    &:nth-child(odd) {
        border-left: 0;
        margin-left: 0;
        @media (min-width : ${props => props.theme.size.m}) {
            &:before{
                right:-2.25em;
                left: auto;
            }
            dt {
                &:before{
                    right:-1em;
                    left: auto;
                    border-left: 10px solid ${props => props.theme.color.primaryLight};
                    border-right: transparent;
                }
            }
        }
    }
    position: relative;
    background-color: ${props => props.theme.color.primaryLight};
    

	dt {
		color: ${props => props.theme.color.primary};
		font-weight: 700;
		font-size: 1rem;
		padding: 0.5em 1em;
		&:before {
			content: "";
            display: inline-block;
            width: 1em;
            height: 1em;
            position: absolute;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
			left: -1em;
			border-right: 10px solid ${props => props.theme.color.primaryLight};
		}
	}
	
	dd {
		background-color: ${props => props.theme.color.lightGrey};
		padding: 1em;
		margin: 0;
	}
			
	&:before {
		content: "";
		color: ${props => props.theme.color.primary};
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.5em;
		height: 1.5em;
		background-color: ${props => props.theme.color.white};
		border: .3em solid ${props => props.theme.color.primary};
		border-radius: 50%;
		position: absolute;
		text-shadow: 0 1px 0 ${props => props.theme.color.primary};
		top: 0.5em;
        left: -2.25em;
	}
}
`