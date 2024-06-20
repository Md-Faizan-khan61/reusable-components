// import Button from '../button'
// import Card from '../card'
// import InputField from './components/input'
// import Modal from './components/modal'
import './App.css'
import { useState } from 'react'
import ListItem from './components/List'
import UseList from './components/wantTouselist'


function App() {

  //------------------List-------------------------
    const items = [
      {name:'faiz',place:'belarus'},
      {name:'john',place:'texas'},
      {name:'eve',place:'scotland'}
    ]


  // --------------------Modal----------------------

  //  const [isopenModal , setopenModal] = useState(false)
  //  const handleOpenModal = () => {
  //   setopenModal(true)
  //  }
  //  const handleCloseModal = () => {
  //   setopenModal(false)
  //  }


  // --------------------input-----------------------

  // const [inputText , setInputText] = useState('')
  // const [queryValue , setQueryValue] = useState('')
  
  // const handleChange = (e) => {
  //      setInputText(e.target.value)
  // }
  // const handleChange2 = (e) => {
  //      setQueryValue(e.target.value)
  // }
  
  //  -------------------Button------------------------

  // const handleClick = () => {
  //   alert('button clicked')
  // }
 
  return (
    <div>
       
     {/* <h3>Reusable components (Robust components library)</h3>
     <Button label='submit' onClick={handleClick} style={{background:'green',color:'white',padding:'10px'}}/>
     <Button label='click' onClick={handleClick} style={{background:'gold',color:'white',margin:'5px', padding:'10px'}}/>
     <Button label='save' onClick={handleClick} style={{background:'red',color:'white',padding:'10px'}}/> */}
    
     {/* <div className='cards'>
     <Card src={'https://twanight.org/wp-content/uploads/2020/11/3004064.jpg'} alt={'norway nights'} title={'Norway'} description={'beautiful sky'}/>
     <Card src={'https://i.pinimg.com/736x/8e/7b/bd/8e7bbd3a963178055d9c0849cf5000b4.jpg'} alt={'burj khalifa'} title={'Abu dhabi'} description={'Tallest building'}/>
     <Card src={'https://i.pinimg.com/736x/94/94/64/949464a02769bdc61bf1b1199007d2c3.jpg'} alt={'The frame'} title={'Abu dhabi'} description={'Tallest Frame'}/>
     <Card src={'https://i.natgeofe.com/n/fb2063bb-3738-48bd-9938-a20d136d0c8b/hagia-sophia-mosque-b4753j_3x4.jpg'} alt={'hagia sophia'} title={'Turkey'} description={'Ancient place'}/>
     <Card src={'https://i.pinimg.com/736x/6e/b7/23/6eb723900f7c320b8dfb4472163be8b5.jpg'} alt={'dome of the rock'} title={'Palestine'} description={'holiest place'}/>
     <Card src={'https://i.pinimg.com/736x/2c/1c/7e/2c1c7e2b99508f7add8cef8bc43e5696.jpg'} alt={'Tower bridge'} title={'London'} description={'incredible place'}/>
     <Card src={'https://i.natgeofe.com/k/c41b4f59-181c-4747-ad20-ef69987c8d59/eiffel-tower-night_2x3.jpg'} alt={'Efil tower'} title={'paris'} description={'tourist hub'}/>
     <Card src={'https://i.natgeofe.com/n/88e6561c-1f3a-41f7-b7c4-841411b11d46/monastery-petra-jordan_square.jpg'} alt={'Petra'} title={'Jordan'} description={'Ancient city'}/>
     <Card src={'https://media.istockphoto.com/id/1270671616/photo/humayuns-tomb.jpg?s=612x612&w=0&k=20&c=zi9v7YHCUw9GnbZVS5ft00CUbYTjzNENJQ7USOVbr-k='} alt={'tomb of humayun'} title={'Delhi'} description={'ancient'}/>
     </div> */}

     {/* <InputField 
    //  type={"text"} 
     placeholder={'input your text'}
     value={inputText}
     onChange={handleChange}
     style={{fontSize:'25px',color:'gray'}}
     />

     <InputField 
     type={"text"} 
    //  placeholder={'type your query'}
     value={queryValue}
     onChange={handleChange2}
     style={{fontSize:'30px',color:'black'}}
     /> */}

     {/* ------------Modal-------------- */}
     {/* <button onClick={handleOpenModal}>openModal</button>
     <Modal isopen={isopenModal} onclose={handleCloseModal}> 
     <h2>Title</h2>
     <p>Content of Modal</p>
     </Modal> */}

    {/* -----------------List---------------------- */}

    <ListItem  
    items={items} 
    renderItem={
    (user) =>
     <div>
      <strong>{user.name}</strong>
      <p>{user.place}</p>
     </div>
    }
    />
    <UseList />
    </div>
  )
}

export default App
