import React, { useState } from 'react';
import '../styles/MainContent.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { setDate } from '../reducers/mainContentReducer';

const MainContent = () => {

    const [currentDate, setCurrentDate] = useState(new Date());
    // const dispatch = useDispatch();
    // const { reload, mainContentState } = useSelector(({ mainContentReducer }) => mainContentReducer);
    // const { date, dateString } = mainContentState;
    // const currentDate = new Date().getTime();

    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate("/explore");
    }
    // let prev, prevString;
    // let count = 0;
    // const handleBackDate = () => {
    //     console.log(dateString, 'dd')
    //     console.log(new Date(currentDate), 'pp')
        
    //     // dispatch(setDate({
    //     //     date: prev.getDate(),
    //     //     dateString: prevString
    //     // }))

    // }

    // const handleForwardDate = () => {

    // }

    const handleBackDate = () => {
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() - 1);
      setCurrentDate(newDate);
    };
  
    const handleForwardDate = () => {
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() + 1);
      setCurrentDate(newDate);
    };
  
    const dateString = currentDate.toLocaleString('default', { month: 'long', weekday: 'long' });
    const date = currentDate.getDate();


    // function handleBackDate() {
    //     const currentDate = new Date(dateString);
    //     currentDate.setDate(currentDate.getDate() - 1);

    //     dispatch(setDate({
    //         date: currentDate.getDate(),
    //         dateString: currentDate.toLocaleString('default', { month: 'long', weekday: 'long'}) + ' ' + currentDate.getFullYear()
    //     }))
    
    //     // mainContentState.date = currentDate.getDate();
    //     // mainContentState.dateString = currentDate.toLocaleString('default', { month: 'long', weekday: 'long'}) + ' ' + currentDate.getFullYear();
    // }
    
    // function handleForwardDate() {
    //     const currentDate = new Date(dateString);
    //     currentDate.setDate(currentDate.getDate() + 1);
    
    //     dispatch(setDate({
    //         date: currentDate.getDate(),
    //         dateString: currentDate.toLocaleString('default', { month: 'long', weekday: 'long'}) + ' ' + currentDate.getFullYear()
    //     }))

    // //     mainContentState.date = currentDate.getDate();
    // //     mainContentState.dateString = currentDate.toLocaleString('default', { month: 'long', weekday: 'long'}) + ' ' + currentDate.getFullYear();
    // }

    return (
        <div className='mainContent-container'>
            <div className='mainContent-header'>

            </div>
            <div className='mainContent-contentArea'>
                {/* <div> */}
                <div className='contentArea-header'>
                    <div style={{ padding: '3px', color: 'white' }}><b>{dateString}</b></div>
                </div>
                <div className='contentArea-main'>
                    <div className='mainDiv'>
                        <ArrowBackIosNewIcon onClick={handleBackDate} sx={{ cursor: 'pointer' }} fontSize='large' />
                        <div className='date' onClick={handleClick}>
                            {/* <Link to="explore"> */}
                            {date}
                            {/* </Link> */}
                        </div>
                        <ArrowForwardIosIcon onClick={handleForwardDate} sx={{ cursor: 'pointer', visibility: date === new Date().getDate() ? 'hidden' : 'visible' }} fontSize='large' />
                    </div>
                </div>
                <div className='contentArea-footer'></div>
                {/* </div> */}
            </div>
            <div className='mainContent-footer'>

            </div>
        </div>
    )
}

export default MainContent;