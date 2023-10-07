function hasTargetSum(array, target) {
  // Write your algorithm here
  
    const seenNumbers = new Set(); // Initialize an empty Set to keep track of seen numbers
  
    for (const number of array) {
      const complement = target - number;
  
      if (seenNumbers.has(complement)) {
        // If the complement exists in the Set, return true
        return true;
      }
  
      seenNumbers.add(number); // Add the current number to the Set
    }
  
    // If no pair is found, return false
    return false;
  }
  


/* 
  Write the Big O time complexity of your function here
  The Big O time complexity of the hasTargetSum function is O(n),
   where "n" is the number of elements in the input array. 
   This is because the function iterates through the array once, 
   performing constant time operations (such as set operations and arithmetic) for each element. 
   The use of a Set data structure allows for efficient lookup and eliminates the need for nested loops, 
   resulting in a linear time complexity.
*/

/* 
  Add your pseudocode here
  Function hasTargetSum(array, target):
    Initialize an empty set called seenNumbers
    For each number in the array:
        Calculate the complement by subtracting the current number from the target
        If the complement is in the seenNumbers set:
            Return true (a pair with the target sum exists)
        Add the current number to the seenNumbers set
    Return false (no pair with the target sum was found)

*/

/*
  Add written explanation of your solution here
  The hasTargetSum function efficiently checks if two numbers in the given array add up to the specified target value. 
  It uses a set to keep track of encountered numbers. 
  The algorithm iterates through the array, calculating the complement (the value needed to reach the target) for each number.
   If the complement is found in the set, it returns true, indicating the presence of a valid pair. 
   If the loop completes without finding a pair, it returns false.
    The algorithm has a time complexity of O(n) and a space complexity of O(n).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(hasTargetSum([1, 2, 3, 4], 6)); // Should return true (2 + 4 = 6)
console.log(hasTargetSum([1, 2, 3, 4], 10)); // Should return false (No pair adds up to 10)
console.log(hasTargetSum([-7, 10, 4, 8], 3)); // Should return true (-7 + 10 = 3)
console.log(hasTargetSum([4], 4)); // Should return false (Only one number in the array)

  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
