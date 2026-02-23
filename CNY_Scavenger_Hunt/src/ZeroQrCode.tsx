import  { useEffect, useState } from 'react'
import { ArrowBigLeft } from 'lucide-react'
type Props = {
    currentUrl: String,
    amt: number
}



const QrCodeShown = (props: Props) => {
  let [textWishes, setTextWishes] = useState("")
  useEffect(() => {
    if (props.amt == 0) {
      setTextWishes("好运将到 再接再励")
    } else if (props.amt == 1){
      setTextWishes("运气来咯 快马加鞭")
    } else if (props.amt == 2){
      setTextWishes("时来运转 乘胜追击")
    } else if (props.amt == 5){
      setTextWishes("五福临门 五指是钱")
    } else if (props.amt == 8){
      setTextWishes("八方来财 发到手满")
    } else if (props.amt == 18){
      setTextWishes("马到功成 一定发财")
    } else if (props.amt == 28){
      setTextWishes("马上开心 马上有钱")
    } else if (props.amt == 38){
      setTextWishes("财气旺盛 就是你啦")
    }
  })
  return (
    <>
      <div className='flex'>
      <button onClick={(e)=>{e.preventDefault(); window.location.href = "/mydashboard"}}><ArrowBigLeft /></button>
      </div>
      <div className="flex flex-col justify-center items-center h-screen">

        <h1 className='text-4xl mb-5'>{textWishes}</h1>
        <p className='text-6xl mb-5'>${props.amt}</p>
      </div>
    </>

  )
}

export default QrCodeShown
