import video from "../assets/demo.mp4";
const Capacitacion = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white my-7 font-bold  text-[1.5rem] text-center md:text-[2rem]">Video demo de capacitación</h1>
      <video className="w-[1000px] " controls>
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Capacitacion;
