# Frames Per Second
def frames(minutes, fps):

  result = minutes * fps * 60
  return str(result)


print(frames(20, 6))     # 7200
print(frames(1, 5))      # 300
print(frames(2000, 11))  # 1320000
print(frames(50000, 9))  # 27000000
