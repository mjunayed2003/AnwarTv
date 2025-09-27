import HomePage from "@/component/HomePage"



const MasterLayout = ({children}:{children: React.ReactNode}) => {
    
  return (
    <div>
        <HomePage />
        <div>
            {children}
        </div>
    </div>
  )
}

export default MasterLayout