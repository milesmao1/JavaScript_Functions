

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count)
{ if (count < 0) 
    {
        console.log('${count} is less than 0');
        return;
    }
    for(let i = 0; i<= count; i++)
    {
        if(i % 2 != 0)  
        {
            console.log(i);
        }
    }
}

printOdds(100);

console.log('Negative test');
printOdds(-10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) 
{
    if (userName == null) 
    {
        console.log('No userName entered. Please try again.');
        return;
    }

    if (age <= 0 || age == null) 
    {
        console.log('incorrect age entered');
        return;
    }

    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age > 16)
    {
        console.log(aboveSixteen);
    }
    else 
    {
        console.log(belowSixteen);
    }
}    

checkAge ("Miles", 46);
checkAge ("Kayla", 12);
checkAge(null, 23);
checkAge("Dude", -30);

// Exercise 3 Section
console.log("EXERCISE 3:\n============\n");

function quadrant(x, y)
{
    if(x == 0 && y == 0)
    {
        console.log(`(${x}, ${y} is in the center`);
    }
    else if (x == 0)
    {
        console.log(`(${x}, ${y} is on the x axis`);
    }
    else if (y == 0)
    {
        console.log(`(${x}, ${y} is on the y axis`);
    }
    else if (x > 0 && y > 0) 
    {
        console.log(`(${x}, ${y} is in Quadrant 1`);
    }
    else if (x < 0 && y > 0)
    {
        console.log(`(${x}, ${y} is in Quadrant 2`);
    }
    else if (x < 0 && y < 0) 
    {
        console.log(`(${x}, ${y} is in Quadrant 3`);
    }
    else if (x > 0 && y > 0)
    {
        console.log(`(${x}, ${y} is in Quadrant 4`);
    }
}  
quadrant (5, 5);
quadrant (-5, 5);
quadrant (-5, -5);
quadrant (5, -5);
quadrant (0, 5);
quadrant (5, 0);

// Exercise 4 Section
console.log("EXERCISE 4:\n==============\n");

function triangle (a, b, c)
{
    if(!(a + b > c) || !(a + c > b) || !(b + c > a)) 
    { 
        console.log(`This is not a triangle`);
        return;
    }

    if (a == b && a == c && b == c)
    {
        console.log(`Triangle is Equilateral`);
    }
    else if (a == b || a == c || b == c) 
    {
        console.log(`Triangle is Isosceles`);
    }
    else 
    {
        console.log(`Triangle is Scalene`);
    }

    triangle(1, 1, 2);
    triangle(2, 2, 2);
    triangle(1, 2, 2);
    triangle(2, 4, 3);
}


// Exercise 5 Section
console.log("EXERCISE 4:\n==============\n");

function dataPlan(planLimit, day, usage)
{
    let dailyUseLimit = (planLimit / 30).toFixed(2);
    let currentDailyUsage = (usage / day).toFixed(2);
    let dayRemaining = 30 - day;
    let overage = ((30 * currentDailyUsage) - planLimit).toFixed(2);
    let dataRemaining = ((planLimit - usage) / daysRemaining).toFixed(2);

    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${dailyUseLimit} GB/day`);

    if(currentDailyUsage > dailyUseLimit) 
    {
        console.log(`You are EXCEEDING your average daily use(${currentDailyUsage} GB/day,)
        continuing this high usage, you'll exceed your data plan by
        ${overage} GBs.`);

        console.log(`To stay below your data plan, use no more than ${dataRemaining} GBs/day`);
    }
    else if (currentDailyUsage < dailyUseLimit) 
    {
        console.log(`You are UNDER your average daily use(${currentDailyUsage} GBs/day,)
        continuing this lower usage, you'll have excess in  your data plan by
        ${overage * -1} GBs.`);

        console.log(`To stay below your data plan, use no more than ${dataRemaining} GBs/day`);
    }
    else 
    {
        console.log(`You are BREAKING EVEN in your average daily use(${currentDailyUsage} GB/day,)
        continuing this usage, you'll  have excess in your data plan by
        ${overage} GBs.`);

        console.log(`To stay below your data plan, use no more than ${dataRemaining} GBs/day`);
    }
}
console.log("Data Over");
dataPlan(100, 15, 56);
console.log()

console.log("Data Even")
dataPlan(100, 15, 50);
console.log()

console.log("Data Under");
dataPlan(100, 15, 40);
console.log();



    