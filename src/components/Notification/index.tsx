import './styles.scss'
const Notification = (props:any) => {
  const { bg, color, text } = props
  return (
    <div className='notification' style={{ backgroundColor: bg, color: color }}>
      {text}
    </div>
  );
};

export default Notification;
