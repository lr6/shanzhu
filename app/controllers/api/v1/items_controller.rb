class Api::V1::ItemsController < ApplicationController

    def index
       @pagy, @records = pagy(Item.all, items: 10)
       render json: { resources: @records, count: @pagy.count }
    end

    def create
        item = Item.new amount: 1
        if item.save
            render json: { resource: item }
        else
            render json: { errors: item.errors }
        end
    end
end
