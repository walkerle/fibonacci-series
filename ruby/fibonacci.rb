def fibonacci(num)
  # type your code in here
  puts "fibonacci(num): num = #{num}"
  result = -1

  if num < 2
    result = num
  end

  last_numbers = [0, 1]

  i = 0
  while i < num - 1 do
    result = last_numbers[0] + last_numbers[1]
    last_numbers = [last_numbers[1], result]
    i += 1
  end

  return result
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
  
  puts "Expecting: 0"
  puts "=> #{fibonacci(0)}"
  puts "-----"
  puts "Expecting: -1"
  puts "=> #{fibonacci(-1)}"
  puts "-----"
  puts "Expecting: 1"
  puts "=> #{fibonacci(1)}"
  puts "-----"
  puts "Expecting: 1"
  puts "=> #{fibonacci(2)}"
  puts "-----"
  puts "Expecting: 2"
  puts "=> #{fibonacci(3)}"
  
end

# Please add your pseudocode to this file
# And a written explanation of your solution

# 1. Create a function that takes in one argument to determine how many times to iterate
# 2. Need something to store the first number and second number as well as reassign after each loop