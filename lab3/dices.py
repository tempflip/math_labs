# returns a list of all possible rolls with 2 dices
# example
# [(1, 1), (1,2), (1,3)......(6,6)]
def all_rolls():
	r = []
	for i in range(1,7):
		for j in range(1,7):
			r.append((i,j))
	return r

# returns all possible sums which can made up from a given roll sequence
def seq_sums(seq):
	if len(seq) == 1 : 
		return set([seq[0][0], seq[0][1], seq[0][0] + seq[0][1]])
	else :
		r = []
		for seq_sum in seq_sums(seq[0:-1]):
			r.append(seq_sum + seq[-1][0])
			r.append(seq_sum + seq[-1][1])
			r.append(seq_sum + seq[-1][0] + seq[-1][1])
		return set(r)


# returns roll sequences which are maximum l long
def get_seqs(l = 2):
	if l == 1: 
		return [[roll] for roll in all_rolls()]
	else:
		seqs = []
		for seq in get_seqs(l = l-1):
			if seq[-1][0] != seq[-1][1]:
				seqs.append(seq)
			else :
				for roll in all_rolls():
					my_seq = seq.copy()		
					my_seq.append(roll)
					seqs.append(my_seq)
		return seqs




my_seqs = get_seqs(3)
for s in my_seqs:
	if 7 in seq_sums(s):
		print(s, seq_sums(s))