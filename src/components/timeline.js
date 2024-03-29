import React  from "react"
import styled from 'styled-components'

export const Timeline = styled.div`
    line-height: 1.5em;
	transition: all .4s ease;
	position: relative;
	counter-reset: section;
	
	&:before {
		content:"";
		width: 4px;
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
    column-gap: 48px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "left ."
        "left right"
        ". right";
    
    @media (max-width : ${props => props.theme.size.l}) {
        grid-template-columns: 1fr;
        grid-template-areas:
        "left"
        "right";
        padding-left: 34px;
        &:before {
            left: 8px;
            right:auto;
        }
    }
`

const TimelineEntryContainer = styled.dl`
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
        @media (min-width : ${props => props.theme.size.l}) {
            &:before{
                right:-36px;
                left: auto;
            }
            dt {
                &:before{
                    right:-16px;
                    left: auto;
                    border-left: 10px solid ${props => props.theme.color.primaryLight};
                    border-right: transparent;
                }
            }
        }
    }
    position: relative;
    background-color: ${props => props.theme.color.primaryLight};
    
    &:hover {
        box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 3px 10px 0 rgb(0 0 0 / 19%);
        transition: all 0.3s ease 0s;
        &:before {
            background-color: ${props => props.theme.color.primary};
        }
    }

	dt {
		font-weight: 700;
		font-size: 1rem;
		padding: 0.5em 1em;
		&:before {
			content: "";
            display: inline-block;
            width: 16px;
            height: 16px;
            position: absolute;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
			left: -16px;
			border-right: 10px solid ${props => props.theme.color.primaryLight};
		}
        &:hover {
            cursor: pointer;
        } 
	}
			
	&:before {
		content: "";
		color: ${props => props.theme.color.primary};
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		background-color: ${props => props.theme.color.white};
		border: 4px solid ${props => props.theme.color.primary};
		border-radius: 50%;
		position: absolute;
		text-shadow: 0 1px 0 ${props => props.theme.color.primary};
		top: 8px;
        left: -36px;
	}

    h3 {
        margin: 0;
    }
}
`

const TimelineEntryContent = styled.dd`
    background-color: ${props => props.theme.color.lightGrey};
    padding: ${props => props.open ? '1em': '0 1em'};
    margin: 0;
    max-height: ${props => props.open ? '700px': '0px'};
    overflow: hidden;    
    transition: all 0.6s ease-in-out;
`

export const TimelineEntry = ({ title, date, children }) => {
    const [ open, setOpen ] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <TimelineEntryContainer>
            <dt onClick={handleClick}>
                <b>{date}</b>
                <h3>{title}</h3>
                
            </dt>
            <TimelineEntryContent open={open}>
                {children}
            </TimelineEntryContent>
        </TimelineEntryContainer>
    );
};