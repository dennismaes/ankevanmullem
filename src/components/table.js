import React from "react"
import styled from 'styled-components'

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    
    td, th {
        padding: 8px;
    }

    th {
        text-align: left;
        font-size: 0.9rem;
        line-height: 1.8em;
        font-weight: 700;
        margin: 0 0 10px;
        text-transform: uppercase;
        color: ${props => props.theme.color.primary};
        background-color: ${props => props.theme.color.white};
    }
      
    td, th{
        &:hover {
            color: ${props => props.theme.color.primary};
            background-color: ${props => props.theme.color.primaryLight};
        }
    }
    
    tr:nth-child(odd) {
        background-color: ${props => props.theme.color.lightGrey};
    }

    thead tr:first-child {
        border-top: 3px solid ${props => props.theme.color.primary};
    }
    tbody tr:last-child {
        border-bottom: 3px solid ${props => props.theme.color.primary};
    }
    
`