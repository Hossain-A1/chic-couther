
const PageTitle = ({subtitle,title,description}) => {
  return (
    <div className="flex flex-col items-start gap-2"> 
      <p className="text-violet-500">{subtitle}</p>
      <h2 className="text-2xl font-semibold capitalize ">{title}</h2>
      <p className="text-sm tracking-wider">{description}</p>
       </div>
  )
}

export default PageTitle