// Binary Search implementation in JavaScript without recursion

/**
 * Performs a binary search on a sorted array to find the index of a given element.
 *
 * @param {Array} array - The sorted array to search in.
 * @param {*} n - The element to search for.
 * @returns {number} - The index of the element in the array, or -1 if not found.
 */

function BinarySearch(array, n) {
	
        let ind_start = 0;
        let ind_end = array.length - 1;

        while (ind_start<= ind_end){
                let ind_mid = Math.floor((ind_start+ind_end)/2);
                if (array[ind_mid]===n){
                        return ind_mid;
                } else if (array[ind_mid]<n){
                        ind_start= ind_mid+1;
                } else {
                        ind_end = ind_mid-1;
                }
        

        }
        return -1
}
console.log(BinarySearch([1, 2, 5, 7], 2));


// Binary Search implementation in JavaScript with recursion

/**
 * Performs a recursive binary search on a sorted array to find the index of a given element.
 *
 * @param {Array} array - The sorted array to search in.
 * @param {number} n - The element to search for.
 * @param {number} ind_start - The starting index of the search range.
 * @param {number} ind_end - The ending index of the search range.
 * @returns {number|null} - The index of the element if found, or null if not found or invalid input.
 */

function RecursiveBinarySearch(array, n, ind_start, ind_end){
        if (ind_start < 0 || ind_end >= array.length){
                console.log('Error');
                return null;
        } if (ind_start>ind_end){
                return null;
        } let m = Math.floor((ind_start+ind_end)/2);

        if (array[m]<n){
                return RecursiveBinarySearch(array,n,m+1,ind_end);
        } else if (array[m]>n){
                return RecursiveBinarySearch(array,n,ind_start,m-1);
        } else {
                return m
        }
};

console.log(RecursiveBinarySearch([1, 2, 5, 7], 4, 0, 3))

