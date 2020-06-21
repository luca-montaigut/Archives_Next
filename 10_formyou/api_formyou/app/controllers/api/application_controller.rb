class Api::ApplicationController < ApplicationController
    # before_action :can_access?

    def can_access?
        unless current_user.can_access
            render json: {error: "Votre compte n'a pas encore été vérifié par les administrateurs"}, status: :forbidden
        end
    end

    def is_admin?
        unless current_user.is_admin
            render json: {error: "Vous devez être un administrateur pour accéder à ce contenu"}, status: :forbidden
        end
    end

    def is_teacher?
        unless current_user.is_teacher
            render json: {error: "Vous devez être un professeur pour accéder à ce contenu"}, status: :forbidden
        end
    end

end