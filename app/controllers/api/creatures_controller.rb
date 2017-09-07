class Api::CreaturesController < ApplicationController
    def index
        @creatures = Creature.all 
        render json: @creatures
    end

    def create
        @creature = Creature.create!(creature_params)
    end

    def show
        @creature = Creature.find params[:id]
        @pets = @creature.pets.all
        render json: {creature: @creature, pets: @pets}
    end

    def update
        @creature = Creature.find params[:id]
        @creature.update!(creature_params)   
    end

    def destroy
        @creature = Creature.find params[:id]
        @creature.destroy
    end

    private 
    def creature_params
        params.require(:creature).permit(:name, :description)
    end
end
