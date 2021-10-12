const EventComponent: React.FC = () => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(event);
  };

  const onDragStart: React.DragEventHandler<HTMLDivElement> = (event) => {
    console.log(event.target);
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
