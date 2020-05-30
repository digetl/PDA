### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card) #should be self.check_for_ace (a class method and incorrect name)
    if card.value = 1 # should be == (check if they are the same) and not = (assign)
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # should be def (not dif_) also missing a comma bewtween card1 and card2
  if card1.value > card2.value
    return card #should return card1
  else
    return card2
  end
end # extra end needs removed
end #the whole of this method has poor indentation

def self.cards_total(cards)
  total # total varaible isnt set
  for card in cards
    total += card.value
    return "You have a total of" + total # incorrect syntax, I would suggest string interpolation. Should be after the end of the for loop
  end
end

#missing end for the class