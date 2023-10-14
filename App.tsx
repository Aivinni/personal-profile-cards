import React from 'react';

interface ProfileProps {
  firstName: string; 
  lastName: string; 
  age: number; 
  hobby: string
}

function ProfileCard({ firstName, lastName, age, hobby }: ProfileProps ) {
  return (
    <div>
      <h1>Name: {firstName} {lastName} </h1>
      <h1>Age: {age} </h1>
      <h1>Hobby: {hobby} </h1>
    </div>
  )
}

export default function App() {
  // TODO: Use the ProfileCard component multiple times and pass in the required props for each profile
  return (
    <div style={{ padding: '20px' }}>
      <ProfileCard firstName='John' lastName='Doe' age={30} hobby='read books'></ProfileCard>
      <ProfileCard firstName='Jane' lastName='Smith' age={25} hobby='play guitar'></ProfileCard>
      <ProfileCard firstName='Alice' lastName='Johnson' age={28} hobby='paint landscapes'></ProfileCard>
    </div>
  );
}