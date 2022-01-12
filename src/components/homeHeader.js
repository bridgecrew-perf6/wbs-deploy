import styled from 'styled-components'
import {FaMapMarked} from 'react-icons/fa'
import {BiCategory} from 'react-icons/bi'
import {IoFastFood} from 'react-icons/io5'

import {Link} from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    padding: 1.5rem;
    background: black;
`

export default function HomeHeader() {

    return <Container>
        <Link to='/'>
            <FaMapMarked data-tip data-for='test' className="icon"/>
            <ReactTooltip id="test"  data-for='test' type="error">
                <span>Find recipes by areas</span>
            </ReactTooltip>
            
        </Link>
        <Link to='/categories'><BiCategory className="icon"/></Link>
        <Link to='/ingredients'><IoFastFood className="icon"/></Link>
    </Container>
}