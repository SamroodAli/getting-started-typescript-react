interface ChildProps {
  color: string;
  onClick: () => void;
  children: string;
}

export const Child = ({ color, onClick, children }: ChildProps) => {
  return (
    <div>
      <p>{color}</p>
      <button onClick={onClick}>Click me</button>
      <div>{children}</div>
    </div>
  );
};

interface ChildAsFCProps {
  color: string;
  onClick: () => void;
  // children not needed here
}

export const ChildAsFC: React.FC<ChildAsFCProps> = ({ color, onClick }) => {
  return (
    <div>
      <p>{color}</p>
      <button onClick={onClick}></button>
    </div>
  );
};

ChildAsFC.displayName = "Child"; // types of methods like this, proptypes etc are only in ChildAsFC component only
