// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function(haystack, needle) {
    return (haystack.indexOf(needle) ? haystack.indexOf(needle) : 0); 
};

// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

var removeElement = function(nums, val) {
    var a = 0;
    for(var i = 0; i < nums.length; i++){
        if (nums[i] !== val){
            nums[a] = nums[i];
            a++;    
        }
    }
    return a;   
};

// Given an array nums of integers, return how many of them contain an even number of digits.

function findNumbers (nums) {
    return nums.filter(x => x.toString().length % 2 == 0).length; 
}