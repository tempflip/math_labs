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

def trinominal(n): # iterative implementation
	tri = [[1]]

	for i in range(n-1):
		row = [1] # first element always 1
		for j in range(len(tri[-1])): # lenght of the inner row is the lenght of the previous row
			if (j != 0): 
				a = tri[-1][j-1]
			else : a = 0 # if out of range
			b = tri[-1][j]
			
			if j != len(tri[-1]) -1:
				c = tri[-1][j+1]
			else : c = 0 # if out of range
			
			el = a+b+c # the element is j-1 + j + j+1 of previous row
			row.append(el)
		row.append(1) # last element always 1
		tri.append(row)
	return tri

def digit_add(row):
	r = 0
	for c, el in enumerate(row):
		r += el * pow(10,c)
	return r

# calculating the powers of 11 and adding up the digits of Pascal's triangle
for i, row in enumerate(pascal_iter(13)):
	print(row)
	print(digit_add(row))
	print(pow(11, i))

# calculating the powers of 11 and adding up the digits of the trinominal triangle
for i, row in enumerate(trinominal(10)):
	print(row)
	print(digit_add(row))
	print(pow(111, i))
