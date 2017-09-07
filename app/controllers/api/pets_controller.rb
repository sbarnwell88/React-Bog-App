class Api::PetsController < ApplicationController
    def index
        @creature = Creature.find params[:creature_id]
        @pets = @creature.pets.all
        render json: @pets
    end

    def show
        @creature = Creature.find params[:creature_id]
        @pet = @creature.pets.find params[:id]

        render json: @pet
    end

end
