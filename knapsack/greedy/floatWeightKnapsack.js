// input sample:
/* w = 8
items = [
	{ weight: 1, value: 100 },
	{ weight: 3, value: 40 },
	{ weight: 4, value: 50 },
	{ weight: 5, value: 70 },
]
*/

// output sample:
/* 
1: 1
5: 1
3: 0.6666666666666666
*/

const knapsack = (items, w) => {
	const n = items.length
	const choices = []
	const callKnapsack = () => {
		items.sort((a, b) => b.value / b.weight - a.value / a.weight)
		for (let i = 0; i < n; i++) {
			const wi = items[i].weight
			if (wi < w) {
				choices[i] = 1
				w -= wi
			} else {
				choices[i] = w / wi
				w = 0
				break
			}
		}
	}
	const print = () => {
		for (let i = 0; i < choices.length; i++) {
			console.log(`${items[i].weight}: ${choices[i]}`)
		}
	}
	callKnapsack()
	print()
}
