require("minitest/autorun")
require('minitest/reporters')
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

require_relative("../card_game")
require_relative("../card")

class CardGameTest < MiniTest::Test

    def setup
        @card1 = Card.new("Hearts", 1)
        @card2 = Card.new("Spades", 3)

        @cards = [@card1, @card2]
    end

    def test_check_for_ace__true
    assert_equal(true, CardGame.check_for_ace(@card1))
    end

    def test_check_for_ace__false
        assert_equal(false, CardGame.check_for_ace(@card2))
    end

    def test_check_for_highest_card
        assert_equal(@card2, CardGame.highest_card(@card1, @card2))
    end

    def test_cards_total__4
        assert_equal("You have a total of 4", CardGame.cards_total(@cards))
    end

end
