function superbowlWin(record) {
    // Use the find() method to locate the first object where result is "W"
    const win = record.find(game => game.result === "W");
    
    // If a win is found, return the year; otherwise, return undefined
    return win ? win.year : undefined;
  }
