const UserCard = ({ data }) => {
  console.log(data)
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "0.5rem"
      }}
      data-testid="user-card"
      >
      <img
        src={data.avatar}
        style={{ borderRadius: "50%" }}
        data-testid="user-card-img"
      />
      <div data-testid="user-card-name">
        {
          data.name
        }
      </div>
    </div>
  );
};

export default UserCard;
