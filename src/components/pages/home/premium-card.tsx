

const PremiumCard = ({service}) => {
  return (
    <div>
       <span>{service.icon}</span>
        <h1 className="text-[28px] text-white font-bold mb-2">{service.title}</h1>
        <p className="text-[20px] text-white font-normal">{service.cont}</p>
    </div>
  )
}

export default PremiumCard