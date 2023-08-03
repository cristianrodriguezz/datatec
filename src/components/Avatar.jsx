
// eslint-disable-next-line react/prop-types
const Avatar = ({ image, name, lastName, email }) => {
  return (
    <div className="w-10 h-10 flex gap-2">
      <img src={image} alt="avatar" className="rounded-xl"/>
      <div>
        <h3 >{name} {lastName}</h3>
        <p className="text-gray-500 font-normal">{email}</p>
      </div>
    </div>
  )
}

export default Avatar