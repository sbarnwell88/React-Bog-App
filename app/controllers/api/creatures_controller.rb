class Api::CreaturesController < ApplicationController
    def index
        @creatures = Creature.all 
        render json: @creatures
    end

    def create
        @creature = Creature.create!(creature_params)

        # redirect_to creature_path(@creature)
    end

    def show
        @creature = Creature.find params[:id]
        render json: @creature
    end

    def update
        @creature = Creature.find params[:id]
        @creature.update!(creature_params)
        
        # redirect_to creature_path(@creature)
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
