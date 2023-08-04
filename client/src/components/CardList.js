import Card from "./Card";

// Pure / DOM Components
const CardList = ({ robots }) => {
  // just to test "ErrorBoundry"
  if (true) {
    throw new Error("NO!");
  }
  //   return robots.map((robot) => (
  return robots.map((robot, i) => (
    <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
    // <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
  ));
};

export default CardList;
