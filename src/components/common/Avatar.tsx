
export default function Avatar() {
  return (
    <div className="avatar">
      <img
        style={{ borderRadius: "100%", width: "35px", height: "35px",objectFit:"cover" }}
        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="image"
      />
    </div>
  );
}
