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


t5 = trinominal(5)

## printing the rows of the triangle
for el in t5:
	print(el)

## summing up and comparing with the powers of 3
for i, row in enumerate(trinominal(12)):
	print (i, ':', sum(row), pow(3, i))



