class Creature < ApplicationRecord
    has_many :pets, dependent: :destroy
end
