const App = () => {
    return (
      <div>
        <Tweet
          name="Mo Howard"
          username="mohoward"
          date={new Date().toDateString()}
          message="Whats the big idea?"
        />
        <Tweet
          name="Shemp Howard"
          username="shempyshemp"
          date={new Date().toDateString()}
          message="Why does nobody like me?"
        />
        <Tweet
          name="Larry Fine"
          username="FeelinFine"
          date={new Date().toDateString()}
          message="A wise guy eh?"
        />
      </div>
    );
  }