# iterative pascal triangle
def pascal_iter(n):
	triangle = []
	for i in range(n):
		if i == 0 : 
			triangle.append([1])
			continue

		row = []
		for j in range(i+1):
			# the 2 edge cases
			if j == 0 or j == i: 
				row.append(1)
				continue
			row.append(triangle[i-1][j-1] + triangle[i-1][j])
		triangle.append(row)

	return triangle

def pascal_req(n):
	if n == 1: return [[1]]
	
	triangle = pascal_req(n-1)

	row = []
	for i in range(n):
		if i == 0 or i == n-1: 
			row.append(1)
			continue
		row.append(triangle[n-2][i] + triangle[n-2][i-1])
	triangle.append(row)

	return triangle




def print_pretty(triangle):
	for i, row in enumerate(triangle):
		
		for j in range(len(triangle[-i-1])):
			print(' ', end='')

		for el in row:
			print(el, end = ' ')
		print('\n', end='')

print_pretty(pascal_iter(8))
print_pretty(pascal_req(8))

