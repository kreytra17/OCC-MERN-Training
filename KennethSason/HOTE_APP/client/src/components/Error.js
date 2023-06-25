const Error = ({ message }) => {
  return (
    <div>
      <div class="alert alert-danger bs" role="alert">
        {message}
      </div>
    </div>
  );
};

export default Error;
