import ContentBtn from '../btn/ContentBtn'

const Welcome = () => {
  return (
    <div className='flex flex-col text-2xl max-[350px]:text-xl'>
      <div className='text-4xl my-5 max-[350px]:text-2xl max-[350px]:my-3'>Hello, I'm Raj Bishwokarma.</div>
        <hr className="h-px my-2 bg-gray-200 border-0 max-[350px]:my-0"></hr>
        <div className='my-5 max-[350px]:my-3'>Welcome to my Portfolio! I’m new in Web Development and I'm looking forward.</div>
        <div className="flex gap-x-3">
          <ContentBtn btnName="My Projects" routeName="works"></ContentBtn>
          <ContentBtn btnName="About Me" routeName="aboutme"></ContentBtn>
        </div>
    </div>
  )
}

export default Welcome
