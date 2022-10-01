import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition';


export const PictureTest = (props) => {

  useEffect(()=>{
    props.setDescriptions([])
  },[])

  const navigate = useNavigate()

  const [curDescription, setCurDescription] = useState('')

  const [tracker, setTracker] = useState(0)

  const pics = [
        'https://www.ragerlawoffices.com/wp-content/uploads/2017/06/Is-my-boss-yelling-at-me-a-hostile-work-environment.jpg', 
        'https://www.jobs.ca/content/uploads/2019/09/exhausted-employees.jpg' , 
        'https://us.res.keymedia.com/files/image/iStock-employee-lunch-break-930x558.jpg'
        
    ]


    const submitDescription = () =>{
      props.setDescriptions((prev)=>[...prev, curDescription])
      console.log(props.descriptions)
      setTracker((prev)=>prev+1)
      console.log(tracker)
      setCurDescription('')
  }


  useEffect(()=>{

    if(tracker == pics.length)
    {
      props.setIsStart(true);
      navigate('/')
    }
  },[tracker])




  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="flex flex-col items-center justify-between">
        <h1 className="text-3xl font-bold mt-4 mb-4">Describe the image</h1>
        <img className="object-cover h-96 w-192 rounded-[2rem]" src={pics[tracker]}/>
        <textarea value={curDescription.length > 0 ? curDescription : transcript} onChange={(e)=>setCurDescription(e.target.value)} className=' text-2xl p-2 mt-10 bg-slate-200 w-3/5 h-32'></textarea>
        <button className='text-center text-white font-bold rounded  mt-3 mb-20 py-2 w-2/12 focus:outline-none bg-gray-700 border-2'
         onClick={submitDescription}>
            Submit
        </button>

        <button
        className='text-center text-white font-bold rounded  mt-3 mb-20 py-2 w-2/12 focus:outline-none bg-gray-700 border-2' 
        onClick={SpeechRecognition.startListening}
        >
        Record
        </button>
    </div>
  )
} 

export default PictureTest


