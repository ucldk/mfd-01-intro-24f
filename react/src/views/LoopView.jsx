export default function LoopView() {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ];

  return (
    <>
      <h1>Loop View</h1>
      <ul>
        {Array(10).fill(0).map((_, i) => (
          <li key={i}>{i}</li>
        )
        )}
      </ul>

      <hr />

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};
